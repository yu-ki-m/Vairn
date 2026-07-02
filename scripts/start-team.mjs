/**
 * Start team mode from already-built team dist artifacts.
 */
import { spawn } from 'node:child_process';
import { assertBuildProfile } from './lib/buildProfile.mjs';
import { parseRunnerArgs, warnIfNpmInterceptedFlags } from './lib/runnerArgs.mjs';

const databaseUrl = process.env.VAIRN_DATABASE_URL ?? process.env.DATABASE_URL;
const cognitoUserPoolId = process.env.VAIRN_COGNITO_USER_POOL_ID;
const cognitoClientId = process.env.VAIRN_COGNITO_CLIENT_ID;
const cognitoTokenUse = process.env.VAIRN_COGNITO_TOKEN_USE;

const missing = [];
if (!databaseUrl) missing.push('VAIRN_DATABASE_URL (or DATABASE_URL)');
if (!cognitoUserPoolId) missing.push('VAIRN_COGNITO_USER_POOL_ID');
if (!cognitoClientId) missing.push('VAIRN_COGNITO_CLIENT_ID');
if (missing.length > 0) {
  process.stderr.write(
    `[start:team] Missing required runtime env: ${missing.join(', ')}\n` +
      '  Build first with VAIRN_COGNITO_DOMAIN and VAIRN_COGNITO_CLIENT_ID, then start with ' +
      'VAIRN_DATABASE_URL, VAIRN_COGNITO_USER_POOL_ID, and VAIRN_COGNITO_CLIENT_ID.\n'
  );
  process.exit(1);
}

if (cognitoTokenUse && cognitoTokenUse !== 'id' && cognitoTokenUse !== 'access') {
  process.stderr.write(
    `[start:team] VAIRN_COGNITO_TOKEN_USE must be 'id' or 'access' (got: ${cognitoTokenUse})\n`
  );
  process.exit(1);
}

assertBuildProfile('team', 'start:team');
warnIfNpmInterceptedFlags('start:team');
const { projectRoot: parsedRoot, passthrough } = parseRunnerArgs(process.argv.slice(2), {
  projectRootEnv: process.env.VAIRN_PROJECT_ROOT
});
const projectRoot = parsedRoot ?? process.cwd();
const host = process.env.VAIRN_HOST ?? '0.0.0.0';
const port = process.env.VAIRN_PORT ?? '4319';

if (process.env.VAIRN_DATA_DIR && !passthrough.includes('--data-dir')) {
  passthrough.push('--data-dir', process.env.VAIRN_DATA_DIR);
}

const serverArgs = [
  'dist/server/index.js',
  '--port',
  port,
  '--no-open',
  '--host',
  host,
  '--external-access',
  '--database-url',
  databaseUrl,
  '--cognito-user-pool-id',
  cognitoUserPoolId,
  '--cognito-client-id',
  cognitoClientId,
  '--project-root',
  projectRoot
];
if (cognitoTokenUse) {
  serverArgs.push('--cognito-token-use', cognitoTokenUse);
}
serverArgs.push(...passthrough);

process.stdout.write(
  `[start:team] starting backend (team-postgresql, Cognito auth: ${cognitoUserPoolId}) on http://${host}:${port}/  (project-root: ${projectRoot})\n`
);

const server = spawn(process.execPath, serverArgs, {
  stdio: 'inherit',
  env: process.env
});

server.on('exit', (code) => process.exit(code ?? 0));
process.on('SIGINT', () => server.kill('SIGTERM'));
process.on('SIGTERM', () => server.kill('SIGTERM'));
