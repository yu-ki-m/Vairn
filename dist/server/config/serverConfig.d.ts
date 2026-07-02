import type { CliOptions } from '../cli/parseArgs.js';
import type { CognitoAuthConfig } from '../auth/cognitoAuthGuard.js';
export interface ServerConfig {
    launchCwd: string;
    projectRoot: string;
    dataDir: string;
    metadataPath: string;
    artifactsDir: string;
    logsDir: string;
    frontendDir: string;
    host: string;
    port?: number;
    externalAccess: boolean;
    authRequired: boolean;
    databaseUrl?: string;
    storageProfile: 'standalone-sqlite' | 'team-postgresql';
    noOpen: boolean;
    /** team モードの Cognito 認証設定。標準の個人利用では undefined。 */
    cognito?: CognitoAuthConfig;
}
export declare class StartupError extends Error {
    readonly exitCode: number;
    constructor(exitCode: number, message: string);
}
export declare const createServerConfig: (options: CliOptions, launchCwd?: string) => ServerConfig;
//# sourceMappingURL=serverConfig.d.ts.map