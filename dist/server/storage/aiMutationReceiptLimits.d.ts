import type { AiMutationReceiptRecord } from './StorageAdapter.js';
/**
 * Commit-time limits are intentionally enforced below the coordinator.  This
 * keeps direct trusted callers from storing data that no UI receipt endpoint
 * can ever return, and it ensures the transaction can safely roll back.
 */
export declare const assertAiMutationReceiptLimits: (receipt: AiMutationReceiptRecord) => void;
//# sourceMappingURL=aiMutationReceiptLimits.d.ts.map