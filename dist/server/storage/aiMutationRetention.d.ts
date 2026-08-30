import { type AiMutationReceiptRecord, type AiRealtimeOutboxRecord } from './StorageAdapter.js';
export interface AiMutationRetentionPlan {
    retentionFloorSequence: number;
    receiptSequencesToPurge: number[];
    outboxEventIdsToPurge: string[];
}
/**
 * Receipts must remain a contiguous suffix.  A pending outbox or a published
 * outbox still within its 24-hour window pins its receipt and every newer
 * receipt; only the older prefix can ever be removed.
 */
export declare const createAiMutationRetentionPlan: (now: string, lastAllocatedSequence: number, receipts: readonly AiMutationReceiptRecord[], outbox: readonly AiRealtimeOutboxRecord[]) => AiMutationRetentionPlan;
//# sourceMappingURL=aiMutationRetention.d.ts.map