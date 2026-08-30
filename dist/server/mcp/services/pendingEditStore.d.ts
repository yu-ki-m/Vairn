import type { ToolError } from '../../../../shared/mcp/coreTypes.js';
import type { BatchEditRequest, BatchEditResult } from '../../../../shared/mcp/batchTypes.js';
import type { McpAuthorityLease } from './currentMcpAuthorityResolver.js';
export type PendingEditStatus = 'pending' | 'applying' | 'applied' | 'rejected' | 'expired' | 'apply_failed';
export type PendingEditDecision = 'approve' | 'reject' | 'expire';
export type PendingEditTerminalStatus = Exclude<PendingEditStatus, 'pending' | 'applying'>;
export interface PendingDeletionTarget {
    elementId: string;
    elementKind: 'node' | 'arrow';
    /** Human-readable data never enters a terminal receipt or MCP projection. */
    label: string;
    nodeType?: string;
}
export interface PendingEditClock {
    now(): number;
}
export interface PendingEditCreateInput {
    workspaceId: string;
    batch: BatchEditRequest;
    /** Allocated before the confirmation decision and retained through commit. */
    batchId: string;
    authorityLease: McpAuthorityLease;
    requestedByActor: string;
    requestedBySubject: string;
    deletionTargets: readonly PendingDeletionTarget[];
    /** Server-internal deadline override, never accepted from a public request. */
    expiresAt?: string;
}
export interface PendingEditRecord extends Omit<PendingEditCreateInput, 'deletionTargets'> {
    pendingId: string;
    deletionTargets: readonly PendingDeletionTarget[];
    status: 'pending' | 'applying';
    requestedAt: string;
    expiresAt: string;
    decision?: 'approve';
    decidedBySubject?: string;
}
export interface PendingEditTerminalRecord {
    pendingId: string;
    workspaceId: string;
    batchId: string;
    requestedByActor: string;
    requestedBySubject: string;
    status: PendingEditTerminalStatus;
    requestedAt: string;
    expiresAt: string;
    terminalAt: string;
    decision: PendingEditDecision;
    decidedBySubject: string | null;
    result: Exclude<BatchEditResult, {
        status: 'pending_confirmation';
        pendingId: string;
        batchId: string;
    }> | null;
    applyError: ToolError | null;
    winningGrant: {
        grantId: string;
        capabilityHash: string;
        subject: string;
        connectionId: string;
        expiresAt: string;
    } | null;
    purgeAfter: string;
}
/** The durable adapter is deliberately minimal: no batch, label, or raw capability crosses this boundary. */
export interface PendingEditTerminalStore {
    put(record: PendingEditTerminalRecord): Promise<void>;
    /** Exact terminal recovery only; pending bodies and grant material stay process-local. */
    get?(workspaceId: string, pendingId: string): Promise<PendingEditTerminalRecord | undefined>;
    /** Terminal-only listing for restart recovery; visibility is applied by this store. */
    list?(workspaceId: string): Promise<PendingEditTerminalRecord[]>;
}
export interface UiPendingEditProjection {
    pendingId: string;
    batchId: string;
    status: PendingEditStatus;
    requestedByActor: string;
    requestedBySubject: string;
    requestedAt: string;
    expiresAt: string;
    terminalAt: string | null;
    decision: PendingEditDecision | null;
    decidedBySubject: string | null;
    deletionTargets: readonly Omit<PendingDeletionTarget, never>[];
    result: PendingEditTerminalRecord['result'];
    applyError: ToolError | null;
    decisionGrantId: string | null;
    decisionCapability: string | null;
    decisionCapabilityExpiresAt: string | null;
}
export interface UiPendingEditListProjection {
    items: UiPendingEditProjection[];
    nextCursor: string | null;
}
export interface McpPendingEditProjection {
    pendingId: string;
    batchId: string;
    status: PendingEditStatus;
    expiresAt: string;
    terminalAt: string | null;
    result: PendingEditTerminalRecord['result'];
    applyError: ToolError | null;
}
export interface PendingEditDecisionGrant {
    decisionGrantId: string;
    decisionCapability: string;
    decisionCapabilityExpiresAt: string;
}
export type PendingEditDecisionClaim = {
    kind: 'claimed';
    pending: PendingEditRecord;
} | {
    kind: 'terminal_retry';
    item: UiPendingEditProjection;
};
export interface PendingEditStoreOptions {
    clock?: PendingEditClock;
    createId?: () => string;
    hmacSecret?: string | Uint8Array;
    pendingTtlMs?: number;
    terminalRetentionMs?: number;
    maxPerSubject?: number;
    maxPerWorkspace?: number;
    maxPendingBytes?: number;
    maxGrantsPerPending?: number;
    terminalStore?: PendingEditTerminalStore;
}
/** HTTP/control-plane handlers can safely map this to a strict ToolError response. */
export declare class PendingEditStoreError extends Error {
    readonly code: 'not_found' | 'not_authorized' | 'pending_conflict' | ToolError['code'];
    readonly statusCode: 400 | 403 | 404 | 409 | 429;
    readonly details?: (ToolError["code"] extends "rate_limited" ? never : unknown) | undefined;
    constructor(code: 'not_found' | 'not_authorized' | 'pending_conflict' | ToolError['code'], statusCode: 400 | 403 | 404 | 409 | 429, details?: (ToolError["code"] extends "rate_limited" ? never : unknown) | undefined);
}
/**
 * The process-local half of deletion confirmation.  It intentionally stores
 * only an HMAC digest of a capability and publishes durable terminal metadata
 * through a narrow port; the batch body and labels never leave this class.
 */
export declare class PendingEditStore {
    private readonly pending;
    private readonly terminals;
    private readonly clock;
    private readonly createId;
    private readonly hmacSecret;
    private readonly pendingTtlMs;
    private readonly terminalRetentionMs;
    private readonly maxPerSubject;
    private readonly maxPerWorkspace;
    private readonly maxPendingBytes;
    private readonly maxGrantsPerPending;
    private readonly terminalStore?;
    constructor(options?: PendingEditStoreOptions);
    create(input: PendingEditCreateInput): PendingEditRecord;
    getForMcp(input: {
        workspaceId: string;
        pendingId: string;
        subject: string;
        /** Owner/Admin-only authorization, established by the caller. */
        allowAnySubject?: boolean;
    }): Promise<McpPendingEditProjection>;
    getForUi(input: {
        workspaceId: string;
        pendingId: string;
        subject: string;
        connectionId: string;
        /** Owner/Admin-only route authorization; never inferred from caller input. */
        allowAnySubject?: boolean;
    }): Promise<UiPendingEditProjection>;
    /**
     * Side-effect-free UI list.  It returns only records owned by the requested
     * subject, binds an opaque cursor to that subject and status filter, and
     * never creates or rotates a decision capability.
     */
    listForUi(input: {
        workspaceId: string;
        subject: string;
        connectionId: string;
        status?: PendingEditStatus;
        cursor?: string;
        limit: number;
        /** Owner/Admin-only route authorization; never inferred from caller input. */
        allowAnySubject?: boolean;
    }): Promise<UiPendingEditListProjection>;
    issueDecisionGrant(input: {
        workspaceId: string;
        pendingId: string;
        subject: string;
        connectionId: string;
        uiProofAbsoluteExpiresAt: string;
        /** Owner/Admin-only route authorization; never inferred from caller input. */
        allowAnySubject?: boolean;
    }): PendingEditDecisionGrant;
    claimDecision(input: {
        workspaceId: string;
        pendingId: string;
        subject: string;
        connectionId: string;
        decision: 'approve' | 'reject';
        decisionGrantId: string;
        decisionCapability: string;
        /** Owner/Admin-only route authorization; never inferred from caller input. */
        allowAnySubject?: boolean;
    }): Promise<PendingEditDecisionClaim>;
    completeApplied(input: {
        pendingId: string;
        result: Exclude<BatchEditResult, {
            status: 'pending_confirmation';
            pendingId: string;
            batchId: string;
        }>;
        /** Set only after the caller atomically persisted this terminal with its mutation. */
        persistedTerminal?: PendingEditTerminalRecord;
    }): Promise<UiPendingEditProjection>;
    /**
     * Constructs, but does not consume, the terminal row for an approved batch.
     * The batch executor passes it into the mutation transaction; only after
     * that commit succeeds does completeApplied remove the live pending record.
     */
    prepareAppliedTerminal(input: {
        pendingId: string;
        result: Exclude<BatchEditResult, {
            status: 'pending_confirmation';
            pendingId: string;
            batchId: string;
        }>;
    }): PendingEditTerminalRecord;
    completeApplyFailed(input: {
        pendingId: string;
        error: ToolError;
    }): Promise<UiPendingEditProjection>;
    invalidateConnection(connectionId: string): void;
    /** Revoke/idle-proof cleanup uses the same connection-grant invalidation path. */
    invalidateSubject(workspaceId: string, subject: string): void;
    /** Drops process-local pending bodies, labels, grants, and terminal cache after durable deletion. */
    clearWorkspace(workspaceId: string): void;
    /** Test-only guard: confirms raw grant values do not become process state. */
    debugMemoryRecord(pendingId: string): string;
    private findVisible;
    private visibleListRecords;
    private sortAt;
    /** Descending `(sortAt,pendingId)`, matching the public control-plane contract. */
    private compareListRecords;
    private isAfterCursor;
    private createListCursor;
    private parseListCursor;
    /**
     * Terminal rows are the only confirmation state allowed to cross a process
     * boundary. Loading one never recreates a pending body, labels, or raw grant
     * capability, and expired retention rows remain invisible even before a
     * background storage purge runs.
     */
    private findTerminal;
    private mcpProjection;
    private uiProjection;
    private publicPendingRecord;
    private materializeGrant;
    private terminalize;
    private buildTerminal;
    private finalizeTerminal;
    private isPreparedAppliedTerminal;
    private expire;
    private persistTerminal;
    private sweep;
    private activeGrant;
    private removeExpiredGrants;
    private winningGrant;
    private isExactTerminalRetry;
    private capabilityHash;
    private equalDigest;
    private equalDigestBase64Url;
    private earliestPendingExpiry;
    private uniqueId;
    private throwToolError;
}
//# sourceMappingURL=pendingEditStore.d.ts.map