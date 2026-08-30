import type { NodeLockService } from '../collaboration/nodeLockService.js';
import type { PathMutationReceiptRecord, StorageAdapter } from '../storage/StorageAdapter.js';
export declare class DrawioResourceMutationService {
    private readonly projectRoot;
    private readonly rootId;
    private readonly storage;
    private readonly locks;
    private readonly repository;
    private readonly workspaceSave;
    constructor(projectRoot: string, rootId: string, storage: StorageAdapter, locks: NodeLockService);
    rename(input: {
        workspaceId: string;
        persistenceSlotId: string;
        from: string;
        to: string;
    }): Promise<PathMutationReceiptRecord>;
    delete(input: {
        workspaceId: string;
        persistenceSlotId: string;
        sourcePath: string;
    }): Promise<PathMutationReceiptRecord>;
    reconcile(workspaceId: string): Promise<void>;
    private mutate;
    private renameRelative;
    private removeRelative;
    private cleanupQuarantine;
    private rollback;
    private updateReceipt;
    private isRegistryApplied;
}
//# sourceMappingURL=drawioResourceMutationService.d.ts.map