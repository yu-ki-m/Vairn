import type { WorkspaceRepository } from './workspaceRepository.js';
export declare class WorkspaceLoadService {
    private readonly repository;
    constructor(repository: WorkspaceRepository);
    loadPartition<T = unknown>(workspaceId: string, partitionType: string, entityId: string): Promise<import("../storage/StorageAdapter.js").PartitionRecord<T> | undefined>;
}
//# sourceMappingURL=workspaceLoadService.d.ts.map