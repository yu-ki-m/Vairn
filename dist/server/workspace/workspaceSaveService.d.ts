import type { NodeLockService } from '../collaboration/nodeLockService.js';
import { type PartitionSaveInput } from './partitionCodec.js';
import type { WorkspaceRepository } from './workspaceRepository.js';
type RegistryAssertion = {
    mode: 'register';
    entryId: string;
    observedSourceRevision: string;
} | {
    mode: 'editor-save';
    entryId: string;
    expectedEntryRevision: number;
    expectedSourceRevision: string | null;
    lock: {
        resourceId: string;
        sessionId: string;
        fencingToken: number;
        serverEpoch?: string;
        leaseId?: string;
        ownerConnectionId?: string;
    };
} | {
    mode: 'source-observation';
    entryId: string;
    expectedEntryRevision: number;
    observation: {
        kind: 'content';
        observedSourceRevision: string;
    } | {
        kind: 'confirmed-missing';
        firstMissingAt: number;
        confirmedMissingAt: number;
    };
} | {
    mode: 'path-mutation';
    entryIds: string[];
    expectedEntryRevisions: Record<string, number>;
    receiptId: string;
} | {
    mode: 'reconnect-merge';
    sourceEntryId: string;
    targetEntryId?: string;
    expectedEntryRevisions: Record<string, number>;
    observedTargetRevision: string;
};
export declare class WorkspaceSaveService {
    private readonly repository;
    private readonly nodeLockService?;
    private readonly readDrawioSource?;
    constructor(repository: WorkspaceRepository, nodeLockService?: NodeLockService | undefined, readDrawioSource?: ((relativePath: string) => Promise<{
        contentHash: string;
        sourceKey: string;
        resourceId: string;
    }>) | undefined);
    savePartition<T = unknown>(input: PartitionSaveInput<T>, registryAssertions?: RegistryAssertion[], options?: {
        mutationGuardsAlreadyHeld?: boolean;
    }): Promise<import("../storage/StorageAdapter.js").PartitionRecord<T>>;
    private validateAssertion;
    private assertSourceRevision;
    private assertSourceMissing;
}
export {};
//# sourceMappingURL=workspaceSaveService.d.ts.map