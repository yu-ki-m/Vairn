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
export interface StorageAdapter {
    initialize(): Promise<void>;
    close(): Promise<void>;
    getPartition<T = unknown>(workspaceId: string, partitionType: string, entityId: string): Promise<PartitionRecord<T> | undefined>;
    putPartition<T = unknown>(record: PartitionRecord<T>): Promise<PartitionRecord<T>>;
    deletePartition(workspaceId: string, partitionType: string, entityId: string): Promise<boolean>;
}
//# sourceMappingURL=StorageAdapter.d.ts.map