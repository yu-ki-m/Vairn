/**
 * Vairn のサービスワーカー。
 *
 * base path（/ または ./）に依存しないよう、スコープは
 * self.registration.scope から取得する。ビルド毎に変わるハッシュ付きアセット名を
 * 事前列挙できないため、プリキャッシュは最小限（アプリシェル）にとどめ、実体は
 * ランタイムキャッシュで賄う。
 *
 * - ナビゲーション(HTML): ネットワーク優先 → オフライン時はキャッシュのアプリシェル
 * - その他の同一オリジン GET: stale-while-revalidate
 *
 * API は data-dir ごとに内容が変わるため、サービスワーカーで絶対にキャッシュしない。
 * Cache Storage に前回 data-dir の workspace partition が残ると、次の data-dir へ
 * キャンバス内容を漏洩・再保存してしまう。
 * drawio は iframe 内の別アプリなので、HTML navigation を Vairn のアプリシェルとして
 * 保存しない。配下の大きなベンダー資産もブラウザの通常キャッシュに任せる。
 *
 * キャッシュを意図的に破棄したいときは CACHE_VERSION を上げる。
 */
const CACHE_VERSION = 'v3';
const CACHE_NAME = `vairn-${CACHE_VERSION}`;
const CACHE_PREFIX = 'vairn-';

const SCOPE_URL = new URL(self.registration.scope);
const APP_SHELL_URL = SCOPE_URL.href;
const API_PATH_URL = new URL('api/', SCOPE_URL);
const WS_PATH_URL = new URL('ws/', SCOPE_URL);
const DRAWIO_PATH_URL = new URL('drawio/', SCOPE_URL);

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      try {
        await cache.add(new Request(APP_SHELL_URL, { cache: 'reload' }));
      } catch {
        // 初回がオフラインなど取得失敗時は無視する（後続のfetchで補完される）。
      }

      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  // 同一オリジンかつスコープ配下のみ扱い、外部(CDN等)やリポジトリ取得は素通しする。
  if (url.origin !== SCOPE_URL.origin || !url.pathname.startsWith(SCOPE_URL.pathname)) {
    return;
  }

  if (isCacheBypassRequest(request, url)) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  event.respondWith(handleAssetRequest(request));
});

function isCacheBypassRequest(request, url) {
  if (
    request.mode !== 'navigate' &&
    (request.cache === 'no-store' || request.cache === 'reload')
  ) {
    return true;
  }

  return (
    url.pathname === API_PATH_URL.pathname.slice(0, -1) ||
    url.pathname.startsWith(API_PATH_URL.pathname) ||
    url.pathname === WS_PATH_URL.pathname.slice(0, -1) ||
    url.pathname.startsWith(WS_PATH_URL.pathname) ||
    url.pathname === DRAWIO_PATH_URL.pathname.slice(0, -1) ||
    url.pathname.startsWith(DRAWIO_PATH_URL.pathname)
  );
}

async function handleNavigationRequest(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);
    cache.put(APP_SHELL_URL, response.clone());
    return response;
  } catch {
    const cached = (await cache.match(request)) || (await cache.match(APP_SHELL_URL));

    if (cached) {
      return cached;
    }

    return Response.error();
  }
}

async function handleAssetRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const network = fetch(request)
    .then((response) => {
      if (response && response.status === 200 && response.type === 'basic') {
        cache.put(request, response.clone());
      }

      return response;
    })
    .catch(() => undefined);

  return cached || (await network) || Response.error();
}
