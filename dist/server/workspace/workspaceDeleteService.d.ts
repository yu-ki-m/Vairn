import type { WorkspaceRepository } from './workspaceRepository.js';
export declare class WorkspaceDeleteService {
    private readonly repository;
    constructor(repository: WorkspaceRepository);
    deletePartition(workspaceId: string, partitionType: string, entityId: string): Promise<boolean>;
}
//# sourceMappingURL=workspaceDeleteService.d.ts.map