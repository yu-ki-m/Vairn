/**
 * Build dist artifacts for personal or team runtime.
 *
 * Runtime is always `dist/server/index.js`; this script only produces dist.
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { writeBuildProfile } from './lib/buildProfile.mjs';

const profile = process.argv[2] ?? 'personal';
if (profile !== 'personal' && profile !== 'team') {
  process.stderr.write(`[build] Unknown profile: ${profile} (expected personal or team)\n`);
  process.exit(1);
}

const binDir = path.join(process.cwd(), 'node_modules', '.bin');
const pathWithBin = `${binDir}${path.delimiter}${process.env.PATH ?? ''}`;

const buildEnv = {
  ...process.env,
  PATH: pathWithBin,
  VITE_BASE_PATH: './',
  VITE_USE_BACKEND_PREVIEW: process.env.VITE_USE_BACKEND_PREVIEW ?? 'true',
  VITE_USE_BACKEND_PERSISTENCE: process.env.VITE_USE_BACKEND_PERSISTENCE ?? 'true',
  VITE_USE_BACKEND_IMAGES: process.env.VITE_USE_BACKEND_IMAGES ?? 'true',
  VITE_USE_BACKEND_COLLABORATION: process.env.VITE_USE_BACKEND_COLLABORATION ?? 'true'
};

if (profile === 'team') {
  const missing = [];
  if (!process.env.VAIRN_COGNITO_DOMAIN) missing.push('VAIRN_COGNITO_DOMAIN');
  if (!process.env.VAIRN_COGNITO_CLIENT_ID) missing.push('VAIRN_COGNITO_CLIENT_ID');
  if (missing.length > 0) {
    process.stderr.write(
      `[build:team] Missing required frontend auth env: ${missing.join(', ')}\n` +
        '  Example: VAIRN_COGNITO_DOMAIN="your-domain.auth.us-east-1.amazoncognito.com" ' +
        'VAIRN_COGNITO_CLIENT_ID="xxxxxxxx" npm run build:team\n'
    );
    process.exit(1);
  }

  Object.assign(buildEnv, {
    VITE_USE_BACKEND_AUTH: 'true',
    VITE_COGNITO_DOMAIN: process.env.VAIRN_COGNITO_DOMAIN,
    VITE_COGNITO_CLIENT_ID: process.env.VAIRN_COGNITO_CLIENT_ID,
    ...(process.env.VAIRN_COGNITO_REDIRECT_URI
      ? { VITE_COGNITO_REDIRECT_URI: process.env.VAIRN_COGNITO_REDIRECT_URI }
      : {}),
    ...(process.env.VAIRN_COGNITO_SCOPES
      ? { VITE_COGNITO_SCOPES: process.env.VAIRN_COGNITO_SCOPES }
      : {}),
    ...(process.env.VAIRN_COGNITO_LOGOUT_URI
      ? { VITE_COGNITO_LOGOUT_URI: process.env.VAIRN_COGNITO_LOGOUT_URI }
      : {})
  });
}

for (const command of [
  'tsc -b',
  'vite build',
  'tsc -b shared server --force',
  'node scripts/obfuscate-dist.mjs dist/shared dist/server'
]) {
  process.stdout.write(`[build:${profile}] ${command}\n`);
  const result = spawnSync(command, { shell: true, stdio: 'inherit', env: buildEnv });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

writeBuildProfile(profile);
process.stdout.write(`[build:${profile}] wrote dist/build-profile.json\n`);
