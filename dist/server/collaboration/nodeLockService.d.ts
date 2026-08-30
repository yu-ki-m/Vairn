export declare const NODE_LOCK_TTL_MS = 120000;
export interface NodeLockRecord {
    workspaceId: string;
    resourceId: string;
    /** Compatibility alias retained for existing node lock clients. */
    nodeId: string;
    sessionId: string;
    holderLabel: string;
    serverEpoch: string;
    leaseId: string;
    ownerConnectionId: string;
    fencingToken: number;
    expiresAt: number;
}
export interface NodeLockAssertion {
    resourceId: string;
    sessionId: string;
    serverEpoch: string;
    leaseId: string;
    ownerConnectionId: string;
    fencingToken: number;
}
export type NodeLockAcquireResult = {
    ok: true;
    lock: NodeLockRecord;
    renewed: boolean;
} | {
    ok: false;
    reason: 'locked';
    lock: NodeLockRecord;
} | {
    ok: false;
    reason: 'session-already-holds-lock';
    lock: NodeLockRecord;
} | {
    ok: false;
    reason: 'mutation-busy';
    lock?: undefined;
};
export type NodeLockChangedEvent = ({
    type: 'node-lock-changed';
    workspaceId: string;
    resourceId: string;
    nodeId: string;
    locked: true;
} & Pick<NodeLockRecord, 'holderLabel' | 'expiresAt' | 'serverEpoch' | 'leaseId' | 'ownerConnectionId'>) | {
    type: 'node-lock-changed';
    workspaceId: string;
    resourceId: string;
    nodeId: string;
    locked: false;
};
export declare class NodeLockService {
    private readonly now;
    private readonly ttlMs;
    readonly serverEpoch: `${string}-${string}-${string}-${string}-${string}`;
    private readonly locksByKey;
    private readonly heldKeyBySession;
    private readonly nextTokenByKey;
    private readonly mutationGuards;
    private readonly listeners;
    constructor(now?: () => number, ttlMs?: number);
    acquire(input: {
        workspaceId: string;
        resourceId?: string;
        nodeId?: string;
        sessionId: string;
        holderLabel: string;
        ownerConnectionId?: string;
    }): NodeLockAcquireResult;
    heartbeat(input: {
        workspaceId: string;
        resourceId?: string;
        nodeId?: string;
        sessionId: string;
        fencingToken: number;
        serverEpoch?: string;
        leaseId?: string;
        ownerConnectionId?: string;
    }): {
        expiresAt: number;
        workspaceId: string;
        resourceId: string;
        /** Compatibility alias retained for existing node lock clients. */
        nodeId: string;
        sessionId: string;
        holderLabel: string;
        serverEpoch: string;
        leaseId: string;
        ownerConnectionId: string;
        fencingToken: number;
    } | null;
    release(input: {
        workspaceId: string;
        resourceId?: string;
        nodeId?: string;
        sessionId: string;
        fencingToken: number;
        serverEpoch?: string;
        leaseId?: string;
        ownerConnectionId?: string;
    }): boolean;
    releaseBySession(workspaceId: string, sessionId: string, ownerConnectionId?: string): NodeLockRecord[];
    assertCurrentToken(input: {
        workspaceId: string;
        resourceId?: string;
        nodeId?: string;
        sessionId: string;
        fencingToken: number;
        serverEpoch?: string;
        leaseId?: string;
        ownerConnectionId?: string;
    }): boolean;
    tryAcquireMutationGuards(workspaceId: string, resourceIds: string[]): (() => void) | null;
    snapshot(workspaceId: string): NodeLockRecord[];
    subscribe(listener: (event: NodeLockChangedEvent) => void): () => boolean;
    private matches;
    private storeLock;
    private deleteLock;
    private clearExpiredSessionLock;
    private clearExpiredLock;
    private emitLocked;
    private emitUnlocked;
    private emit;
}
//# sourceMappingURL=nodeLockService.d.ts.map