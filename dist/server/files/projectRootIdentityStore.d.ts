import type { StorageAdapter } from '../storage/StorageAdapter.js';
/** Persists an opaque identity so equal folder names never share a lock namespace. */
export declare class ProjectRootIdentityStore {
    private readonly storage;
    private readonly fallback;
    constructor(storage: StorageAdapter);
    loadOrCreate(workspaceId: string, projectRoot: string): Promise<{
        rootId: string;
        canonicalRootPath: string;
    }>;
}
//# sourceMappingURL=projectRootIdentityStore.d.ts.map