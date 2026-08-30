# Self-hosted diagrams.net Embed

- Source: official `jgraph/drawio` release `v30.2.7` (`draw.war`)
- Integrity and file-count metadata: `VENDOR_MANIFEST.json`
- License: `LICENSE`
- Runtime contract: same-origin `/drawio/index.html?embed=1&proto=json`

## Modification boundary

The drawio JavaScript, styles, shapes, stencils, images, MathJax files, and
`mxgraph/css/common.css` are byte-for-byte release assets. Vairn does not patch
those files. `index.upstream.html` is the untouched release entry document.

`index.html` is the only Vairn-owned integration shell in the runtime tree. It
keeps Vairn branding during startup, rejects top-level navigation into drawio,
and loads the same CSS and script entry points as `index.upstream.html`. The
host bridge remains in `src/lib/drawio/drawioEmbedBridge.ts` and communicates
only through the supported embed-mode `postMessage` protocol.

## Upgrade procedure

1. Obtain the trusted SHA-256 for the official `draw.war` asset.
2. Run `npm run drawio:vendor:update -- X.Y.Z HASH`.
3. Run `npm run drawio:vendor:verify`.
4. Run the drawio unit, integration, real-iframe, and backend E2E suites listed
   in `specs/135-drawio-file-sync/quickstart.md`.

The updater extracts a deterministic runtime allowlist, preserves the Vairn
shell, records the upstream entry document, removes stale release files, and
fails when an expected runtime path disappears. New upstream dependencies must
be reviewed explicitly and added to the allowlist; the real-iframe network and
protocol tests then act as the compatibility gate.
