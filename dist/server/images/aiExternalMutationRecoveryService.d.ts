import type { AiExternalMutationIntent, StorageAdapter } from '../storage/StorageAdapter.js';
export interface AiExternalMutationRecoveryResult {
    recoveredIntentIds: string[];
    failedIntentIds: string[];
}
/**
 * Completes the compensating half of a filesystem/database transaction after
 * an unexpected process stop.  A committed intent is never passed here: its
 * image metadata was committed atomically with the workspace document.
 */
export declare class AiExternalMutationRecoveryService {
    private readonly storage;
    private readonly preparation;
    constructor(storage: Pick<StorageAdapter, 'listAiExternalMutationIntents' | 'putAiExternalMutationIntent' | 'purgeExpiredAiExternalMutationIntents'>, preparation: Pick<{
        compensate(intent: AiExternalMutationIntent): Promise<void>;
    }, 'compensate'>);
    recoverWorkspace(workspaceId: string): Promise<AiExternalMutationRecoveryResult>;
    purgeResolved(before: string): Promise<number>;
}
//# sourceMappingURL=aiExternalMutationRecoveryService.d.ts.map