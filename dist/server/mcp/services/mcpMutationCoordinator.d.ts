import type { AiChangeRecord, AiExternalMutationIntent, AiMutationCommitInput, AiMutationReceiptRecord, AiPendingTerminalRecord, AiProvenanceRegistryReservation, AiRealtimeOutboxRecord } from '../../storage/StorageAdapter.js';
import type { WorkspaceRepository } from '../../workspace/workspaceRepository.js';
import type { WorkspaceLifecycleGuard } from '../../workspace/workspaceLifecycleGuard.js';
type NewChange = Omit<AiChangeRecord, 'workspaceId' | 'basePartitionVersion' | 'committedPartitionVersion'>;
type NewReceipt = Omit<AiMutationReceiptRecord, 'receiptSequence' | 'workspaceId' | 'partitionEntityId' | 'basePartitionVersion' | 'committedPartitionVersion'>;
type NewOutbox = Omit<AiRealtimeOutboxRecord, 'receiptSequence' | 'workspaceId'>;
export interface TrustedAiMutationInput<T> {
    workspaceId: string;
    partitionEntityId: string;
    expectedRevision: number;
    payload: T;
    additionalPartitions?: AiMutationCommitInput<T>['additionalPartitions'];
    externalIntents?: readonly AiExternalMutationIntent[];
    provenanceEntries: AiProvenanceRegistryReservation[];
    change: NewChange;
    receipt: NewReceipt;
    outbox: NewOutbox;
    /** Server-created only; committed with the corresponding AI mutation. */
    pendingTerminal?: AiPendingTerminalRecord;
}
/**
 * Server-internal choke point for trusted AI writes. It deliberately accepts
 * no HTTP request and always delegates the final compare-and-swap plus journal
 * rows to one StorageAdapter transaction.
 */
export declare class McpMutationCoordinator {
    private readonly repository;
    private readonly lifecycleGuard?;
    constructor(repository: WorkspaceRepository, lifecycleGuard?: WorkspaceLifecycleGuard | undefined);
    commit<T>(input: TrustedAiMutationInput<T>): Promise<import("../../storage/StorageAdapter.js").AiMutationCommitResult<T> | undefined>;
    private commitUnderLifecycleLease;
}
export {};
//# sourceMappingURL=mcpMutationCoordinator.d.ts.map