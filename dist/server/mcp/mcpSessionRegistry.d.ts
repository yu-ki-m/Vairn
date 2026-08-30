import type { McpAccessContext, SessionCapacityUnavailable } from '../../../shared/mcp/coreTypes.js';
export interface McpSessionClock {
    now(): number;
}
export interface McpSessionRecord {
    readonly sessionId: string;
    readonly context: McpAccessContext;
    readonly issuedAt: number;
    readonly absoluteExpiresAt: number;
    lastAccessAt: number;
}
export type McpSessionLookup = {
    kind: 'found';
    session: McpSessionRecord;
} | {
    kind: 'not_found';
} | {
    kind: 'credential_mismatch';
};
export type McpSessionAdmission = {
    kind: 'admitted';
    session: McpSessionRecord;
} | {
    kind: 'capacity_unavailable';
    error: SessionCapacityUnavailable;
};
export interface McpSessionRegistryOptions {
    clock?: McpSessionClock;
    idleMs?: number;
    absoluteMs?: number;
    maxPerSubject?: number;
    maxPerWorkspaceProcess?: number;
    createSessionId?: () => string;
}
export declare class McpSessionRegistry {
    private readonly sessions;
    private readonly clock;
    private readonly idleMs;
    private readonly absoluteMs;
    private readonly maxPerSubject;
    private readonly maxPerWorkspaceProcess;
    private readonly createSessionId;
    constructor(options?: McpSessionRegistryOptions);
    admit(context: McpAccessContext, requestedSessionId?: string): McpSessionAdmission;
    lookup(sessionId: string, context: Pick<McpAccessContext, 'credentialFingerprint' | 'protocolVersion'>): McpSessionLookup;
    /**
     * Server-internal lease validation deliberately does not refresh MCP idle
     * time. A UI approval may confirm that the originating session still exists,
     * but it must never keep an otherwise idle MCP credential alive.
     */
    lookupForAuthorityLease(sessionId: string): McpSessionRecord | undefined;
    delete(sessionId: string): boolean;
    /** Removes only sessions bound to a workspace after its durable deletion commits. */
    clearWorkspace(workspaceId: string): number;
    shutdown(): void;
    size(): number;
    private activeSessions;
    private capacityError;
    private sweep;
    private createUniqueSessionId;
}
//# sourceMappingURL=mcpSessionRegistry.d.ts.map