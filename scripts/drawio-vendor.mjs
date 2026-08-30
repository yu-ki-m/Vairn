import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { mkdtemp, mkdir, readFile, readdir, rm, stat, writeFile, copyFile, unlink, rmdir } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const vendorDirectory = path.join(repositoryRoot, 'public', 'drawio');
const manifestPath = path.join(vendorDirectory, 'VENDOR_MANIFEST.json');
const releaseRepository = 'jgraph/drawio';
const ownedFiles = new Set(['index.html', 'LICENSE', 'VENDORED.md', 'VENDOR_MANIFEST.json']);
const retainedTopLevelFiles = [
  'clear.html',
  'export-fonts.css',
  'export3.html',
  'favicon.ico',
  'open.html',
  'shortcuts.svg',
  'vsdxImporter.html'
];
const retainedDirectories = ['images', 'img', 'math4', 'plugins', 'shapes', 'stencils', 'styles'];
const retainedJsDirectories = [
  'cryptojs',
  'deflate',
  'elk',
  'freehand',
  'jquery',
  'jszip',
  'mermaid',
  'orgchart',
  'rough',
  'sanitizer',
  'spin'
];
const retainedJsRootFiles = new Set([
  'app.min.js',
  'bootstrap.js',
  'clear.js',
  'export-init.js',
  'export.js',
  'extensions.min.js',
  'main.js',
  'math-print.js',
  'open.js',
  'orgchart.min.js',
  'PostConfig.js',
  'PreConfig.js',
  'shapes-14-6-5.min.js',
  'stencils.min.js',
  'vsdxImporter.js'
]);

function parseArguments(argv) {
  const [command = 'verify', ...rest] = argv;
  const options = new Map();
  if (command === 'update' && rest[0] && !rest[0].startsWith('--')) {
    options.set('version', rest[0]);
    if (rest[1]) options.set('sha256', rest[1]);
    if (rest[2]) options.set('archive', rest[2]);
    if (rest.length > 3) throw new Error(`Unexpected argument: ${rest[3]}`);
    return { command, options };
  }
  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];
    if (!token.startsWith('--')) throw new Error(`Unexpected argument: ${token}`);
    const value = rest[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`Missing value for ${token}`);
    options.set(token.slice(2), value);
    index += 1;
  }
  return { command, options };
}

async function walkFiles(root, relativeDirectory = '') {
  const absoluteDirectory = path.join(root, relativeDirectory);
  const entries = await readdir(absoluteDirectory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relativePath = path.posix.join(relativeDirectory.replaceAll('\\', '/'), entry.name);
    if (entry.isDirectory()) files.push(...await walkFiles(root, relativePath));
    else if (entry.isFile()) files.push(relativePath);
  }
  return files;
}

async function sha256File(filePath) {
  return createHash('sha256').update(await readFile(filePath)).digest('hex');
}

async function computeRuntimeTree() {
  const files = (await walkFiles(vendorDirectory))
    .filter((relativePath) => !ownedFiles.has(relativePath))
    .sort((left, right) => left.localeCompare(right, 'en'));
  const treeHash = createHash('sha256');
  let totalBytes = 0;
  for (const relativePath of files) {
    const absolutePath = path.join(vendorDirectory, relativePath);
    const bytes = await readFile(absolutePath);
    const fileHash = createHash('sha256').update(bytes).digest('hex');
    totalBytes += bytes.byteLength;
    treeHash.update(relativePath).update('\0').update(fileHash).update('\0');
  }
  return {
    fileCount: files.length,
    totalBytes,
    treeSha256: treeHash.digest('hex')
  };
}

function extractRuntimeReferences(html) {
  const references = new Set();
  for (const match of html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["']/gi)) {
    references.add(match[1]);
  }
  for (const match of html.matchAll(/<link\b[^>]*\brel=["'][^"']*stylesheet[^"']*["'][^>]*\bhref=["']([^"']+)["']/gi)) {
    references.add(match[1]);
  }
  return [...references].sort();
}

async function verifyVendor() {
  const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
  const runtimeTree = await computeRuntimeTree();
  const upstreamIndexPath = path.join(vendorDirectory, 'index.upstream.html');
  const upstreamIndexHash = await sha256File(upstreamIndexPath);
  const shell = await readFile(path.join(vendorDirectory, 'index.html'), 'utf8');
  const upstreamIndex = await readFile(upstreamIndexPath, 'utf8');
  const commonCss = await readFile(path.join(vendorDirectory, 'mxgraph', 'css', 'common.css'), 'utf8');

  const failures = [];
  for (const key of ['fileCount', 'totalBytes', 'treeSha256']) {
    if (runtimeTree[key] !== manifest.runtime[key]) {
      failures.push(`runtime ${key} differs from VENDOR_MANIFEST.json`);
    }
  }
  if (upstreamIndexHash !== manifest.upstreamIndexSha256) {
    failures.push('index.upstream.html differs from the recorded upstream release');
  }
  for (const reference of extractRuntimeReferences(upstreamIndex)) {
    if ((reference.endsWith('.css') || reference.endsWith('.js')) && !shell.includes(reference)) {
      failures.push(`Vairn embed shell is missing upstream runtime reference: ${reference}`);
    }
  }
  if (!/<title>Vairn<\/title>/i.test(shell) || !shell.includes('window.top === window.self')) {
    failures.push('Vairn embed shell branding or top-level navigation guard is missing');
  }
  if (!/\.mxCellEditor\s*\{[^}]*position:\s*relative/s.test(commonCss)) {
    failures.push('mxgraph/css/common.css is missing the upstream cell-editor positioning rule');
  }
  if (failures.length > 0) throw new Error(failures.join('\n'));

  process.stdout.write(
    `drawio ${manifest.releaseTag} verified: ${runtimeTree.fileCount} files, ${runtimeTree.treeSha256}\n`
  );
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { cwd: repositoryRoot, stdio: 'inherit', shell: false });
    child.on('error', reject);
    child.on('exit', (code) => code === 0
      ? resolve()
      : reject(new Error(`${command} exited with code ${code}`)));
  });
}

async function copyDirectory(sourceRoot, targetRoot, relativeDirectory, expectedFiles) {
  for (const relativePath of await walkFiles(sourceRoot, relativeDirectory)) {
    const sourcePath = path.join(sourceRoot, relativePath);
    const targetPath = path.join(targetRoot, relativePath);
    await mkdir(path.dirname(targetPath), { recursive: true });
    await copyFile(sourcePath, targetPath);
    expectedFiles.add(relativePath);
  }
}

async function copyFileFromRelease(sourceRoot, targetRoot, sourceRelativePath, expectedFiles, targetRelativePath = sourceRelativePath) {
  const sourcePath = path.join(sourceRoot, sourceRelativePath);
  if (!(await stat(sourcePath)).isFile()) throw new Error(`Release is missing ${sourceRelativePath}`);
  const targetPath = path.join(targetRoot, targetRelativePath);
  await mkdir(path.dirname(targetPath), { recursive: true });
  await copyFile(sourcePath, targetPath);
  expectedFiles.add(targetRelativePath);
}

async function removeEmptyDirectories(root, relativeDirectory = '') {
  const absoluteDirectory = path.join(root, relativeDirectory);
  const entries = await readdir(absoluteDirectory, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const childRelativePath = path.posix.join(relativeDirectory.replaceAll('\\', '/'), entry.name);
      await removeEmptyDirectories(root, childRelativePath);
    }
  }
  if (relativeDirectory && (await readdir(absoluteDirectory)).length === 0) await rmdir(absoluteDirectory);
}

async function syncReleaseAssets(extractedRoot) {
  const expectedFiles = new Set();
  for (const relativePath of retainedTopLevelFiles) {
    await copyFileFromRelease(extractedRoot, vendorDirectory, relativePath, expectedFiles);
  }
  await copyFileFromRelease(extractedRoot, vendorDirectory, 'index.html', expectedFiles, 'index.upstream.html');
  for (const relativeDirectory of retainedDirectories) {
    await copyDirectory(extractedRoot, vendorDirectory, relativeDirectory, expectedFiles);
  }
  for (const fileName of retainedJsRootFiles) {
    await copyFileFromRelease(extractedRoot, vendorDirectory, `js/${fileName}`, expectedFiles);
  }
  for (const relativeDirectory of retainedJsDirectories) {
    await copyDirectory(extractedRoot, vendorDirectory, `js/${relativeDirectory}`, expectedFiles);
  }
  for (const relativePath of [
    'resources/CONTRIBUTING.md',
    'resources/README.md',
    'resources/dia.txt',
    'resources/dia_i18n.txt',
    'resources/dia_ja.txt',
    'mxgraph/css/common.css'
  ]) {
    await copyFileFromRelease(extractedRoot, vendorDirectory, relativePath, expectedFiles);
  }

  for (const relativePath of await walkFiles(vendorDirectory)) {
    if (!ownedFiles.has(relativePath) && !expectedFiles.has(relativePath)) {
      const resolved = path.resolve(vendorDirectory, relativePath);
      if (!resolved.startsWith(`${path.resolve(vendorDirectory)}${path.sep}`)) {
        throw new Error(`Refusing to remove path outside vendor directory: ${relativePath}`);
      }
      await unlink(resolved);
    }
  }
  await removeEmptyDirectories(vendorDirectory);
}

async function fetchReleaseMetadata(releaseTag) {
  const response = await fetch(`https://api.github.com/repos/${releaseRepository}/releases/tags/${releaseTag}`, {
    headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'Vairn drawio vendor updater' }
  });
  if (!response.ok) throw new Error(`GitHub release lookup failed with HTTP ${response.status}`);
  const release = await response.json();
  const asset = release.assets?.find((candidate) => candidate.name === 'draw.war');
  if (!asset) throw new Error(`${releaseTag} does not contain draw.war`);
  return {
    url: asset.browser_download_url,
    digest: typeof asset.digest === 'string' ? asset.digest.replace(/^sha256:/, '') : null
  };
}

async function updateVendor(options) {
  const version = options.get('version');
  if (!version || !/^\d+\.\d+\.\d+$/.test(version)) {
    throw new Error('update requires a version in x.y.z form');
  }
  const releaseTag = `v${version}`;
  const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), 'vairn-drawio-'));
  try {
    const archivePathOption = options.get('archive');
    let archivePath;
    let releaseUrl;
    let expectedHash = options.get('sha256')?.toLowerCase() ?? null;
    if (archivePathOption) {
      archivePath = path.resolve(repositoryRoot, archivePathOption);
      releaseUrl = `https://github.com/${releaseRepository}/releases/download/${releaseTag}/draw.war`;
    } else {
      const metadata = await fetchReleaseMetadata(releaseTag);
      releaseUrl = metadata.url;
      expectedHash ??= metadata.digest;
      const response = await fetch(releaseUrl);
      if (!response.ok) throw new Error(`draw.war download failed with HTTP ${response.status}`);
      archivePath = path.join(temporaryDirectory, 'draw.war');
      await writeFile(archivePath, Buffer.from(await response.arrayBuffer()));
    }

    const actualHash = await sha256File(archivePath);
    if (!expectedHash) {
      throw new Error(`No trusted SHA-256 was supplied. Re-run with --sha256 ${actualHash}`);
    }
    if (actualHash !== expectedHash) {
      throw new Error(`draw.war SHA-256 mismatch: expected ${expectedHash}, received ${actualHash}`);
    }

    const extractedRoot = path.join(temporaryDirectory, 'release');
    await mkdir(extractedRoot, { recursive: true });
    await run('tar', ['-xf', archivePath, '-C', extractedRoot]);
    await syncReleaseAssets(extractedRoot);

    const runtime = await computeRuntimeTree();
    const manifest = {
      schemaVersion: 1,
      releaseTag,
      sourceRepository: `https://github.com/${releaseRepository}`,
      assetUrl: releaseUrl,
      drawWarSha256: actualHash,
      upstreamIndexSha256: await sha256File(path.join(vendorDirectory, 'index.upstream.html')),
      runtime
    };
    await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
    await verifyVendor();
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true });
  }
}

const { command, options } = parseArguments(process.argv.slice(2));
if (command === 'verify') await verifyVendor();
else if (command === 'update') await updateVendor(options);
else throw new Error(`Unknown drawio vendor command: ${command}`);
