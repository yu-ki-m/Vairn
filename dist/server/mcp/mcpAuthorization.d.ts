import { type CognitoTokenVerifier } from '../auth/cognitoAuthGuard.js';
import type { McpTeamSecurityConfig } from '../config/serverConfig.js';
import type { McpAccessContext } from '../../../shared/mcp/coreTypes.js';
export interface PersonalMcpSessionCredentials {
    sessionId: string;
    credentialFingerprint: string;
}
export declare const fingerprintCredential: (credential: string) => string;
export declare const issuePersonalMcpSessionCredentials: () => PersonalMcpSessionCredentials;
export declare const createPersonalMcpAccessContext: (credentialFingerprint: string) => McpAccessContext;
export type McpTeamAuthenticationFailure = 'unauthenticated' | 'insufficient_scope' | 'not_authorized';
export declare class McpTeamAuthenticationError extends Error {
    readonly kind: McpTeamAuthenticationFailure;
    constructor(kind: McpTeamAuthenticationFailure);
}
export interface McpTeamAuthenticationResult {
    context: McpAccessContext;
}
export interface McpTeamAuthenticator {
    authenticate(rawAccessToken: string): Promise<McpTeamAuthenticationResult>;
}
/**
 * Team MCP authentication is deliberately separate from the UI guard: it
 * accepts only the MCP client, resource audience, and scope, and unmapped
 * groups are denied instead of receiving a fallback Viewer role.
 */
export declare class McpCognitoTeamAuthenticator implements McpTeamAuthenticator {
    private readonly verifier;
    private readonly security;
    constructor(verifier: CognitoTokenVerifier, security: McpTeamSecurityConfig);
    authenticate(rawAccessToken: string): Promise<McpTeamAuthenticationResult>;
}
//# sourceMappingURL=mcpAuthorization.d.ts.map