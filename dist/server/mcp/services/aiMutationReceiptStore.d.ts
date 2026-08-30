import type { AiMutationReceiptListInput, AiMutationReceiptListSnapshot, AiMutationReceiptRecord } from '../../storage/StorageAdapter.js';
import type { WorkspaceRepository } from '../../workspace/workspaceRepository.js';
import { type AiReceiptReplayDirection } from './aiReceiptReplayService.js';
export interface AiMutationReceiptProjection {
    receiptId: string;
    changeId: string;
    receiptSequence: number;
    partitionEntityId: string;
    batchId: string | null;
    actor: string;
    requestedBySubject: string;
    target: AiMutationReceiptRecord['target'];
    basePartitionVersion: number;
    committedPartitionVersion: number;
    forwardPatch: unknown;
    preconditionHash: string;
    postconditionHash: string;
    createdAt: string;
    purgeAfter: string;
    /** The hash-compatible replay action, if the current snapshot permits one. */
    replayDirection: AiReceiptReplayDirection | null;
    undoEligible: boolean;
}
export interface ReceiptProjectionAccess {
    subject: string;
    hasWorkspaceWrite: boolean;
}
/** Ensures all UI-sync paths receive forward-only receipt projections. */
export declare class AiMutationReceiptStore {
    private readonly repository;
    constructor(repository: WorkspaceRepository);
    get(workspaceId: string, receiptId: string, access: ReceiptProjectionAccess): Promise<AiMutationReceiptProjection | undefined>;
    list(input: AiMutationReceiptListInput, access: ReceiptProjectionAccess): Promise<Omit<AiMutationReceiptListSnapshot, 'items'> & {
        items: AiMutationReceiptProjection[];
    }>;
}
//# sourceMappingURL=aiMutationReceiptStore.d.ts.map