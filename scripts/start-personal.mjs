/**
 * Start personal/local mode from already-built dist artifacts.
 */
import { spawn } from 'node:child_process';
import { assertBuildProfile } from './lib/buildProfile.mjs';
import { parseRunnerArgs, warnIfNpmInterceptedFlags } from './lib/runnerArgs.mjs';

warnIfNpmInterceptedFlags('start:personal');
assertBuildProfile('personal', 'start:personal');

const { projectRoot: parsedRoot, passthrough } = parseRunnerArgs(process.argv.slice(2), {
  projectRootEnv: process.env.VAIRN_PROJECT_ROOT
});
const projectRoot = parsedRoot ?? process.cwd();
const port = process.env.VAIRN_PORT ?? '4319';

if (process.env.VAIRN_DATA_DIR && !passthrough.includes('--data-dir')) {
  passthrough.push('--data-dir', process.env.VAIRN_DATA_DIR);
}

const serverArgs = [
  'dist/server/index.js',
  '--port',
  port,
  '--no-open',
  '--project-root',
  projectRoot,
  ...passthrough
];

process.stdout.write(
  `[start:personal] starting backend on http://127.0.0.1:${port}/  (project-root: ${projectRoot})\n`
);

const server = spawn(process.execPath, serverArgs, {
  stdio: 'inherit',
  env: process.env
});

server.on('exit', (code) => process.exit(code ?? 0));
process.on('SIGINT', () => server.kill('SIGTERM'));
process.on('SIGTERM', () => server.kill('SIGTERM'));
