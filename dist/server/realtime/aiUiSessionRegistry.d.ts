import { UiSessionProofRegistry, type UiSessionProofRecord } from '../auth/uiSessionProof.js';
export interface AiUiSessionClock {
    now(): number;
}
export interface AiUiConnection {
    connectionId: string;
    proofId: string;
    workspaceId: 'local-workspace';
    actor: string;
    subject: string;
    origin: string;
    connectedAt: number;
    lastHeartbeatAt: number;
}
export interface AiUiSessionRegistryOptions {
    clock?: AiUiSessionClock;
    heartbeatMs?: number;
    staleMs?: number;
    createConnectionId?: () => string;
    /** Clears security material (for example pending-decision grants) bound to a tab. */
    onConnectionClosed?: (connection: AiUiConnection) => void;
}
/**
 * Process-local UI realtime ownership.  It contains only opaque connection
 * handles; the HttpOnly proof remains owned by UiSessionProofRegistry.
 */
export declare class AiUiSessionRegistry {
    private readonly proofs;
    private readonly connections;
    private readonly clock;
    private readonly staleMs;
    private readonly createConnectionId;
    private readonly onConnectionClosed?;
    constructor(proofs: UiSessionProofRegistry, options?: AiUiSessionRegistryOptions);
    /**
     * Opens a realtime connection only for the currently active proof record.
     * The route resolves the record immediately before calling this method, but
     * it can still expire or be revoked before the websocket handler runs.
     * Re-resolving here prevents a stale or mismatched record from minting a
     * connection handle bound to another origin, actor, or subject.
     */
    open(proofId: string, proof: UiSessionProofRecord | undefined): AiUiConnection | undefined;
    heartbeat(connectionId: string): AiUiConnection | undefined;
    recordUserInteraction(connectionId: string): AiUiConnection | undefined;
    get(connectionId: string): AiUiConnection | undefined;
    /** Most recently interactive valid connection; deterministic ID tie-break. */
    selectActive(workspaceId: 'local-workspace', subject?: string): AiUiConnection | undefined;
    /** Socket close never revokes its UI proof; another tab may still use it. */
    close(connectionId: string): boolean;
    shutdown(): void;
    size(): number;
    private isProofActive;
    private sweep;
    private removeConnection;
    private uniqueConnectionId;
}
//# sourceMappingURL=aiUiSessionRegistry.d.ts.map