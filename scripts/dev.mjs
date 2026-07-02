/**
 * バックエンド（固定ポート 4319）とフロントエンド（Vite）を同時に起動する開発用ランナー。
 *
 * Vite には /api と /ws をバックエンドへ転送するプロキシが設定済みのため、これ一発で
 * フロントエンドは起動時からバックエンド project-root へ自動接続できる。
 *
 * ワークスペース（project-root）の指定:
 *   npm run dev -- "C:\\path\\to\\workspace"                        （位置引数で渡す）
 *   npm run dev -- --project-root "C:\\path"                        （--project-root フラグでも可）
 *   npm run dev -- "C:\\path" --data-dir "C:\\data"                 （データ保存先を指定）
 *   VAIRN_PROJECT_ROOT="C:\\path\\to\\workspace" npm run dev        （環境変数で渡す）
 *
 * `--` 以降に書いたサーバ CLI フラグ（--data-dir / --host / --database-url など）はそのまま
 * バックエンドへ透過する。npm は `--` 以降の引数を横取りしないため `--project-root` も指定可能。
 * 指定できるフラグ一覧は server/src/cli/parseArgs.ts を参照。
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import { parseRunnerArgs, warnIfNpmInterceptedFlags } from './lib/runnerArgs.mjs';

// node scripts/dev.mjs 直接実行でも tsx / vite を解決できるよう node_modules/.bin を PATH 先頭へ。
const binDir = path.join(process.cwd(), 'node_modules', '.bin');
const childEnv = {
  ...process.env,
  PATH: `${binDir}${path.delimiter}${process.env.PATH ?? ''}`,
  // dev は常にバックエンドを起動するため、Vite dev プロキシ（/api,/ws）と
  // バックエンド描画/永続化を有効化する。
  VITE_DEV_BACKEND_PROXY: '1',
  VITE_USE_BACKEND_PREVIEW: process.env.VITE_USE_BACKEND_PREVIEW ?? 'true',
  VITE_USE_BACKEND_PERSISTENCE: process.env.VITE_USE_BACKEND_PERSISTENCE ?? 'true',
  VITE_USE_BACKEND_IMAGES: process.env.VITE_USE_BACKEND_IMAGES ?? 'true'
};

warnIfNpmInterceptedFlags('dev');
const { projectRoot, passthrough } = parseRunnerArgs(process.argv.slice(2), {
  projectRootEnv: process.env.VAIRN_PROJECT_ROOT
});

// PowerShell が `--` を食う等で CLI から --data-dir を渡せない環境向けに、env でも指定可能にする。
// CLI 側に --data-dir があればそちらを優先（重複させない）。
if (process.env.VAIRN_DATA_DIR && !passthrough.includes('--data-dir')) {
  passthrough.push('--data-dir', process.env.VAIRN_DATA_DIR);
}

// backend は shell 経由のコマンド文字列で起動するため、空白を含むトークンのみクォートする。
const quoteArg = (value) => (/\s/.test(value) ? `"${value}"` : value);

// バックエンドは npm を介さず tsx を直接起動する。
// tsx は npm script 実行時に PATH へ追加される node_modules/.bin から解決される。
const backendParts = ['tsx', 'server/src/index.ts', '--port', '4319', '--no-open'];
if (projectRoot) {
  backendParts.push('--project-root', quoteArg(projectRoot));
}
// passthrough を末尾に置くことで、ユーザ指定フラグが既定（--port 等）を上書きできる（サーバは後勝ち）。
backendParts.push(...passthrough.map(quoteArg));

const processes = [
  { name: 'backend', command: backendParts.join(' ') },
  { name: 'frontend', command: 'vite' }
];

if (projectRoot) {
  process.stdout.write(`[dev] project-root: ${projectRoot}\n`);
}

const children = [];
let shuttingDown = false;

const prefix = (name) => `[${name}] `;

const pipeOutput = (stream, name, target) => {
  let buffer = '';
  stream.on('data', (chunk) => {
    buffer += chunk.toString();
    const lines = buffer.split('\n');
    buffer = lines.pop() ?? '';
    for (const line of lines) {
      target.write(`${prefix(name)}${line}\n`);
    }
  });
  stream.on('end', () => {
    if (buffer.length > 0) {
      target.write(`${prefix(name)}${buffer}\n`);
    }
  });
};

const shutdown = (code) => {
  if (shuttingDown) {
    return;
  }
  shuttingDown = true;
  for (const child of children) {
    child.kill('SIGTERM');
  }
  process.exit(code ?? 0);
};

for (const { name, command } of processes) {
  const child = spawn(command, {
    shell: true,
    stdio: ['inherit', 'pipe', 'pipe'],
    env: childEnv
  });

  pipeOutput(child.stdout, name, process.stdout);
  pipeOutput(child.stderr, name, process.stderr);

  child.on('exit', (exitCode) => {
    if (!shuttingDown) {
      process.stdout.write(`${prefix(name)}exited with code ${exitCode}\n`);
      shutdown(exitCode ?? 1);
    }
  });

  children.push(child);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));
