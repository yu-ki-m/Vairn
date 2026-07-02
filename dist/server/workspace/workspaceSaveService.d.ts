import { type PartitionSaveInput } from './partitionCodec.js';
import type { WorkspaceRepository } from './workspaceRepository.js';
export declare class WorkspaceSaveService {
    private readonly repository;
    constructor(repository: WorkspaceRepository);
    savePartition<T = unknown>(input: PartitionSaveInput<T>): Promise<import("../storage/StorageAdapter.js").PartitionRecord<T>>;
}
//# sourceMappingURL=workspaceSaveService.d.ts.map