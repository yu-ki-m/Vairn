import type { ProjectRootChange } from './projectRootWatcher.js';
export interface SearchIndexInvalidator {
    invalidate(paths: string[]): void;
}
export interface ExternalChangeCoordinatorState {
    previewInvalidations: string[];
    gitInvalidated: boolean;
}
/**
 * Fan filesystem watcher hints into the caches that must not serve stale data.
 * The watcher is intentionally not an authority for linked-drawio identity; the
 * linked source hint below remains a separate, path-only notification.
 */
export declare class ExternalChangeCoordinator {
    private readonly searchIndex;
    private readonly previewInvalidations;
    private gitInvalidated;
    constructor(searchIndex: SearchIndexInvalidator);
    handleChange(change: ProjectRootChange): Promise<void>;
    getState(): ExternalChangeCoordinatorState;
}
export interface LinkedDrawioSourceHint {
    type: 'linked-drawio-source-hint';
    workspaceId: string;
    path: string;
    eventType: ProjectRootChange['type'];
}
/** Watcher paths are hints only. Canonical identity remains registry/file-route derived. */
export declare function createLinkedDrawioSourceHint(projectRoot: string, workspaceId: string, change: ProjectRootChange): LinkedDrawioSourceHint | null;
//# sourceMappingURL=externalChangeCoordinator.d.ts.map