import type { PartitionRecord, StorageAdapter } from './StorageAdapter.js';
export declare class SqliteStorageAdapter implements StorageAdapter {
    private readonly metadataPath;
    private database?;
    constructor(metadataPath: string);
    initialize(): Promise<void>;
    close(): Promise<void>;
    getPartition<T = unknown>(workspaceId: string, partitionType: string, entityId: string): Promise<PartitionRecord<T> | undefined>;
    putPartition<T = unknown>(record: PartitionRecord<T>): Promise<PartitionRecord<T>>;
    deletePartition(workspaceId: string, partitionType: string, entityId: string): Promise<boolean>;
    private requireDatabase;
    private toRecord;
}
//# sourceMappingURL=sqliteAdapter.d.ts.map