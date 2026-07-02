/**
 * 起動ランナー（dev / start:personal / start:team）共通の CLI 引数処理。
 *
 * - 先頭の位置引数を project-root のフォールバックとして扱う。サーバ CLI は位置引数を受け付けない
 *   （server/src/cli/parseArgs.ts が Unexpected positional argument で弾く）ため、ランナー側で
 *   `--project-root <path>` に変換して渡す。
 * - それ以外の `--*` フラグはサーバ CLI へそのまま透過させる
 *   （--data-dir / --host / --port / --database-url / --frontend-dir / --external-access /
 *    --no-open / --cognito-user-pool-id / --cognito-client-id / --cognito-token-use）。
 * - npm は `--` 以降の引数を横取りしないので、`npm run <script> -- --data-dir <path>` の形で渡せる。
 *
 * project-root の優先順位: env(VAIRN_PROJECT_ROOT) > --project-root フラグ > 先頭の位置引数。
 */

// サーバ CLI のブール（値を取らない）フラグ。server/src/cli/parseArgs.ts の booleanOptions と一致させること。
const BOOLEAN_FLAGS = new Set(['--external-access', '--no-open']);

/**
 * @param {readonly string[]} argv  process.argv.slice(2) 相当
 * @param {{ projectRootEnv?: string }} [options]
 * @returns {{ projectRoot: string | undefined, passthrough: string[], positionals: string[] }}
 *   passthrough は --project-root を除いたサーバ透過フラグ（値トークンを含む）。
 */
export function parseRunnerArgs(argv, { projectRootEnv } = {}) {
  const passthrough = [];
  const positionals = [];
  let flagProjectRoot;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (!arg.startsWith('--')) {
      positionals.push(arg);
      continue;
    }

    // --project-root はサーバへ二重に渡さないよう値を取り出して透過対象から除く。
    if (arg === '--project-root') {
      const value = argv[index + 1];
      if (value !== undefined && !value.startsWith('--')) {
        flagProjectRoot = value;
        index += 1;
      }
      continue;
    }

    passthrough.push(arg);
    if (!BOOLEAN_FLAGS.has(arg)) {
      // 値フラグは次トークンを値として一緒に透過する（サーバの readValue と同じ判定）。
      const value = argv[index + 1];
      if (value !== undefined && !value.startsWith('--')) {
        passthrough.push(value);
        index += 1;
      }
    }
  }

  const projectRoot = projectRootEnv ?? flagProjectRoot ?? positionals[0];

  return { projectRoot, passthrough, positionals };
}

// `npm run <script> --data-dir X`（`--` 無し）だと、npm は `--data-dir` を**自身の config として横取り**し、
// process.env.npm_config_data_dir に入れてしまう（値もスペース区切りだと失われ 'true' になる）。
// その結果サーバ用フラグがスクリプトへ届かず、サーバは既定値（例: 既定の .vairn データディレクトリ）で起動する。
// ここでは「サーバ用フラグが `--` 無しで渡された痕跡」を env から検知する。env キーはダッシュ→アンダースコア。
const NPM_INTERCEPTED_FLAG_ENV = {
  npm_config_project_root: '--project-root',
  npm_config_data_dir: '--data-dir',
  npm_config_host: '--host',
  npm_config_port: '--port',
  npm_config_database_url: '--database-url',
  npm_config_frontend_dir: '--frontend-dir',
  npm_config_external_access: '--external-access',
  npm_config_cognito_user_pool_id: '--cognito-user-pool-id',
  npm_config_cognito_client_id: '--cognito-client-id',
  npm_config_cognito_token_use: '--cognito-token-use'
};

/** `--` 無しで渡されて npm に横取りされたサーバ用フラグ名の一覧を返す。 */
export function detectNpmInterceptedFlags(env = process.env) {
  return Object.entries(NPM_INTERCEPTED_FLAG_ENV)
    .filter(([key]) => env[key] !== undefined)
    .map(([, flag]) => flag);
}

// scriptName（npm script 名）から対応する .mjs ファイル名へ。
const SCRIPT_FILE = {
  dev: 'dev.mjs',
  'start:personal': 'start-personal.mjs',
  'start:team': 'start-team.mjs'
};

/**
 * サーバ用フラグが npm に横取りされていたら stderr に警告する。npm 経由でフラグが届かなかった時だけ
 * 発火し、`node scripts/<x>.mjs` 直接実行や正しく透過できた時は発火しない（npm_config_* が立たない）。
 *
 * 主因は PowerShell が `npm run <s> -- ...` の先頭 `--` を「PowerShell 自身のパラメータ終端」として
 * 食い、npm へ渡らないこと。その結果 npm が `--project-root` 等を自分の config として横取りする。
 */
export function warnIfNpmInterceptedFlags(
  scriptName,
  env = process.env,
  write = process.stderr.write.bind(process.stderr)
) {
  const flags = detectNpmInterceptedFlags(env);
  if (flags.length === 0) {
    return flags;
  }
  const file = SCRIPT_FILE[scriptName] ?? `${scriptName}.mjs`;
  const example = flags.map((flag) => `${flag} "<値>"`).join(' ');
  write(
    `[${scriptName}] WARNING: ${flags.join(', ')} がバックエンドへ届いていません` +
      `（PowerShellの場合は'--' をクォートで囲ってください。例："--"）。既定値で起動します。\n` +
      `  次のいずれかで渡してください:\n` +
      `    1) '--' をクォート : npm run ${scriptName} "--" ${example}\n` +
      `    2) 環境変数        : $env:VAIRN_PROJECT_ROOT="..."; $env:VAIRN_DATA_DIR="..."; npm run ${scriptName}\n` +
      `    3) スクリプト直接  : node scripts/${file} ${example}\n` +
      `  （Git Bash / cmd なら 'npm run ${scriptName} -- ${example}' でも可）\n`
  );
  return flags;
}
