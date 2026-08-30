import type { PartitionRecord, PathMutationReceiptRecord, ProjectRootIdentityRecord, StorageAdapter } from './StorageAdapter.js';
export declare class PostgresStorageAdapter implements StorageAdapter {
    private readonly pool;
    constructor(databaseUrl: string);
    initialize(): Promise<void>;
    close(): Promise<void>;
    getPartition<T = unknown>(workspaceId: string, partitionType: string, entityId: string): Promise<PartitionRecord<T> | undefined>;
    putPartition<T = unknown>(record: PartitionRecord<T>): Promise<PartitionRecord<T>>;
    deletePartition(workspaceId: string, partitionType: string, entityId: string): Promise<boolean>;
    getProjectRootIdentity(workspaceId: string, canonicalRootPath: string): Promise<ProjectRootIdentityRecord | undefined>;
    putProjectRootIdentity(record: ProjectRootIdentityRecord): Promise<ProjectRootIdentityRecord>;
    getPathMutationReceipt(receiptId: string): Promise<PathMutationReceiptRecord | undefined>;
    putPathMutationReceipt(record: PathMutationReceiptRecord): Promise<PathMutationReceiptRecord>;
    listUnfinishedPathMutationReceipts(workspaceId: string): Promise<PathMutationReceiptRecord[]>;
}
//# sourceMappingURL=postgresAdapter.d.ts.map