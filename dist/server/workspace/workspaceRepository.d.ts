import type { PartitionRecord, StorageAdapter } from '../storage/StorageAdapter.js';
export declare class WorkspaceRepository {
    private readonly storage;
    constructor(storage: StorageAdapter);
    loadPartition<T = unknown>(workspaceId: string, partitionType: string, entityId: string): Promise<PartitionRecord<T> | undefined>;
    savePartition<T = unknown>(record: PartitionRecord<T>): Promise<PartitionRecord<T>>;
    deletePartition(workspaceId: string, partitionType: string, entityId: string): Promise<boolean>;
}
//# sourceMappingURL=workspaceRepository.d.ts.map