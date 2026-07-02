import type { PartitionRecord, StorageAdapter } from './StorageAdapter.js';
export declare class PostgresStorageAdapter implements StorageAdapter {
    private readonly pool;
    constructor(databaseUrl: string);
    initialize(): Promise<void>;
    close(): Promise<void>;
    getPartition<T = unknown>(workspaceId: string, partitionType: string, entityId: string): Promise<PartitionRecord<T> | undefined>;
    putPartition<T = unknown>(record: PartitionRecord<T>): Promise<PartitionRecord<T>>;
    deletePartition(workspaceId: string, partitionType: string, entityId: string): Promise<boolean>;
}
//# sourceMappingURL=postgresAdapter.d.ts.map