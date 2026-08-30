import type { McpAccessContext } from '../../../../shared/mcp/coreTypes.js';
import type { McpSessionRegistry } from '../mcpSessionRegistry.js';
export interface McpAuthorityLease {
    readonly leaseId: string;
    readonly sessionId: string;
}
/** Process-local lease map; no lease is ever accepted from an HTTP client. */
export declare class CurrentMcpAuthorityResolver {
    private readonly leases;
    issue(sessionId: string): McpAuthorityLease;
    resolve(lease: McpAuthorityLease, registry: McpSessionRegistry, credentialFingerprint?: string): McpAccessContext | undefined;
    revokeForSession(sessionId: string): void;
    shutdown(): void;
}
//# sourceMappingURL=currentMcpAuthorityResolver.d.ts.map