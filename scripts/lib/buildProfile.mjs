import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const buildProfilePath = () => path.join(process.cwd(), 'dist', 'build-profile.json');

export function writeBuildProfile(profile) {
  const filePath = buildProfilePath();
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(
    filePath,
    `${JSON.stringify({ profile, builtAt: new Date().toISOString() }, null, 2)}\n`
  );
}

export function assertBuildProfile(expectedProfile, scriptName) {
  const command = expectedProfile === 'team' ? 'npm run build:team' : 'npm run build';
  const filePath = buildProfilePath();

  let profile;
  try {
    profile = JSON.parse(readFileSync(filePath, 'utf8')).profile;
  } catch {
    process.stderr.write(
      `[${scriptName}] Missing or invalid dist build profile. Run '${command}' before '${scriptName}'.\n`
    );
    process.exit(1);
  }

  if (profile !== expectedProfile) {
    process.stderr.write(
      `[${scriptName}] dist was built for '${profile}', but '${expectedProfile}' is required. Run '${command}' and try again.\n`
    );
    process.exit(1);
  }
}
