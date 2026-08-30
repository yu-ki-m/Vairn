export interface CliOptions {
    projectRoot?: string;
    dataDir?: string;
    host: string;
    port?: number;
    externalAccess: boolean;
    databaseUrl?: string;
    frontendDir?: string;
    noOpen: boolean;
    cognitoUserPoolId?: string;
    cognitoClientId?: string;
    cognitoTokenUse?: string;
}
export declare class CliParseError extends Error {
    readonly exitCode = 1;
    constructor(message: string);
}
export declare const parseCliArgs: (argv: readonly string[]) => CliOptions;
//# sourceMappingURL=parseArgs.d.ts.map