import type { ProjectRootChange } from './projectRootWatcher.js';
import type { SearchIndexService } from '../search/searchIndexService.js';
export declare class ExternalChangeCoordinator {
    private readonly searchIndex;
    private previewInvalidations;
    private gitInvalidated;
    constructor(searchIndex: SearchIndexService);
    handleChange(change: ProjectRootChange): Promise<void>;
    getState(): {
        previewInvalidations: string[];
        gitInvalidated: boolean;
    };
}
//# sourceMappingURL=externalChangeCoordinator.d.ts.map