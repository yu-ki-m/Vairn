/**
 * tsc でコンパイルしたバックエンド成果物（dist/server, dist/shared）を難読化する
 * ポストビルド工程。フロントエンドは vite-plugin-javascript-obfuscator が担当するが、
 * バックエンドは tsc 出力で Vite を通らないため、ここで javascript-obfuscator を直接かける。
 *
 * 使い方: node scripts/obfuscate-dist.mjs <dir> [<dir> ...]
 *
 * 方針（フロントと同じ「軽量・性能優先」プロファイル + Node ターゲット）:
 * - 識別子マングリング(hex) + 文字列配列エンコード(base64) のみ
 * - controlFlowFlattening / deadCodeInjection / selfDefending / debugProtection は無効
 * - ESM/Node の起動を壊さないこと最優先（target:'node'、静的 import/export はそのまま）
 *
 * 注意: バックエンドに動的 import()/require() の指定子が増えた場合は、フロント同様
 *       reservedStrings での保護が必要になる（現状バックエンドには無い）。
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import JavaScriptObfuscator from 'javascript-obfuscator';

const targets = process.argv.slice(2);

if (targets.length === 0) {
  console.error('usage: node scripts/obfuscate-dist.mjs <dir> [<dir> ...]');
  process.exit(1);
}

/** @type {import('javascript-obfuscator').ObfuscatorOptions} */
const options = {
  compact: true,
  identifierNamesGenerator: 'hexadecimal',
  stringArray: true,
  stringArrayEncoding: ['base64'],
  stringArrayThreshold: 0.75,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  numbersToExpressions: false,
  simplify: true,
  selfDefending: false,
  debugProtection: false,
  disableConsoleOutput: false,
  sourceMap: false,
  target: 'node'
};

function collectJsFiles(dir) {
  const out = [];
  let entries;

  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      out.push(...collectJsFiles(full));
    } else if (entry.isFile() && full.endsWith('.js')) {
      out.push(full);
    }
  }

  return out;
}

let obfuscatedCount = 0;

for (const target of targets) {
  for (const file of collectJsFiles(target)) {
    const code = readFileSync(file, 'utf8');
    const result = JavaScriptObfuscator.obfuscate(code, options);
    writeFileSync(file, result.getObfuscatedCode(), 'utf8');
    obfuscatedCount += 1;
  }
}

console.log(`[obfuscate] ${obfuscatedCount} file(s) obfuscated in: ${targets.join(', ')}`);
