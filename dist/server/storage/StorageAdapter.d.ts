export interface PartitionRecord<T = unknown> {
    partitionId: string;
    workspaceId: string;
    partitionType: string;
    entityId: string;
    version: number;
    contentHash: string;
    payload: T;
    updatedAt: string;
    recoveryState: 'clean' | 'dirty' | 'saving' | 'failed' | 'recovering';
}
export interface MetadataTransaction {
    commit(): Promise<void>;
    rollback(): Promise<void>;
}
export interface ProjectRootIdentityRecord {
    workspaceId: string;
    canonicalRootPath: string;
    rootId: string;
    createdAt: string;
}
export interface PathMutationReceiptRecord {
    receiptId: string;
    workspaceId: string;
    persistenceSlotId: string;
    operation: 'rename' | 'move' | 'delete';
    state: 'prepared' | 'filesystem-applied' | 'registry-applied' | 'rolled-back';
    sourcePath: string;
    targetPath?: string;
    quarantinePath?: string;
    cleanupPending?: boolean;
    affectedEntryIds: string[];
    createdAt: string;
    updatedAt: string;
}
export interface StorageAdapter {
    initialize(): Promise<void>;
    close(): Promise<void>;
    getPartition<T = unknown>(workspaceId: string, partitionType: string, entityId: string): Promise<PartitionRecord<T> | undefined>;
    putPartition<T = unknown>(record: PartitionRecord<T>): Promise<PartitionRecord<T>>;
    deletePartition(workspaceId: string, partitionType: string, entityId: string): Promise<boolean>;
    getProjectRootIdentity?(workspaceId: string, canonicalRootPath: string): Promise<ProjectRootIdentityRecord | undefined>;
    putProjectRootIdentity?(record: ProjectRootIdentityRecord): Promise<ProjectRootIdentityRecord>;
    getPathMutationReceipt?(receiptId: string): Promise<PathMutationReceiptRecord | undefined>;
    putPathMutationReceipt?(record: PathMutationReceiptRecord): Promise<PathMutationReceiptRecord>;
    listUnfinishedPathMutationReceipts?(workspaceId: string): Promise<PathMutationReceiptRecord[]>;
}
//# sourceMappingURL=StorageAdapter.d.ts.map