import type { AiMutationReceiptRecord } from '../../storage/StorageAdapter.js';
import type { WorkspaceRepository } from '../../workspace/workspaceRepository.js';
import type { WorkspaceLifecycleGuard } from '../../workspace/workspaceLifecycleGuard.js';
export type AiReceiptReplayDirection = 'undo' | 'redo';
export interface AiReceiptReplayInput {
    receiptId: string;
    subject: string;
    expectedRevision: number;
    direction: AiReceiptReplayDirection;
    /** UI authorization has already established `workspace:write`. */
    hasWorkspaceWrite: boolean;
    /**
     * The HTTP composition layer supplies the live reference-mode and lock
     * checks.  Keeping it injected prevents this persistence-only service from
     * ever becoming a public, unguarded trusted-write endpoint.
     */
    assertReplayGuards?: (receipt: AiMutationReceiptRecord) => Promise<void>;
}
export interface AiReceiptReplayResult {
    status: 'applied';
    receiptId: string;
    direction: AiReceiptReplayDirection;
    newRevision: number;
}
/** Canonical SHA-256 shape used by internal receipts; never returned to UI clients. */
export declare const hashAiReceiptWorkspacePayload: (value: unknown) => string;
/**
 * Applies a stored internal receipt patch for UI Undo/Redo.  It intentionally
 * neither accepts a caller-supplied patch nor writes another AI journal row;
 * a replay is a normal user action derived from immutable server-side data.
 */
export declare class AiReceiptReplayService {
    private readonly repository;
    private readonly lifecycleGuard?;
    constructor(repository: WorkspaceRepository, lifecycleGuard?: WorkspaceLifecycleGuard | undefined);
    replay(input: AiReceiptReplayInput): Promise<AiReceiptReplayResult>;
    private replayUnderLifecycleLease;
}
//# sourceMappingURL=aiReceiptReplayService.d.ts.map