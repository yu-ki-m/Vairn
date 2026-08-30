/**
 * public/favicon.svg を元に PWA 用の PNG アイコンを生成する。
 * 追加依存なしで済むよう、同梱済みの Playwright(chromium) で SVG をラスタライズする。
 * 実行: node scripts/generate-pwa-icons.mjs
 */
import { chromium } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(scriptDir, '../public');
const svg = readFileSync(resolve(publicDir, 'favicon.svg'), 'utf8');

// アプリのテーマ背景（tokens.css の --workspace-bg）。
const APP_BACKGROUND = '#111315';

const targets = [
  // purpose: any（透過）。フルブリードで書き出す。
  { file: 'pwa-192.png', size: 192, contentScale: 1, background: 'transparent' },
  { file: 'pwa-512.png', size: 512, contentScale: 1, background: 'transparent' },
  // purpose: maskable（不透明背景 + セーフゾーン用の余白）。
  { file: 'pwa-maskable-512.png', size: 512, contentScale: 0.72, background: APP_BACKGROUND },
  // iOS ホーム画面用（透過を嫌うため不透明背景）。
  { file: 'apple-touch-icon.png', size: 180, contentScale: 0.86, background: APP_BACKGROUND }
];

const browser = await chromium.launch();

try {
  const page = await browser.newPage();

  for (const target of targets) {
    const content = Math.round(target.size * target.contentScale);
    const isTransparent = target.background === 'transparent';
    const html = `<!doctype html><html><head><meta charset="utf-8"><style>
      html, body { margin: 0; padding: 0; }
      .wrap {
        width: ${target.size}px;
        height: ${target.size}px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${isTransparent ? 'transparent' : target.background};
      }
      .wrap svg { width: ${content}px; height: ${content}px; display: block; }
    </style></head><body><div class="wrap">${svg}</div></body></html>`;

    await page.setViewportSize({ width: target.size, height: target.size });
    await page.setContent(html, { waitUntil: 'networkidle' });

    const element = await page.$('.wrap');

    if (!element) {
      throw new Error('Failed to locate icon wrapper element');
    }

    const buffer = await element.screenshot({ omitBackground: isTransparent });
    writeFileSync(resolve(publicDir, target.file), buffer);
    console.log(`wrote public/${target.file} (${target.size}x${target.size})`);
  }
} finally {
  await browser.close();
}
