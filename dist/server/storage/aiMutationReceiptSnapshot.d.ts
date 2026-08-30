import { type AiMutationReceiptListInput, type AiMutationReceiptListSnapshot, type AiMutationReceiptRecord } from './StorageAdapter.js';
/**
 * Derives all pagination fields from one storage snapshot and validates the
 * contiguous retained suffix before it can be exposed to a synchronizer.
 */
export declare const createAiMutationReceiptListSnapshot: (input: AiMutationReceiptListInput, lastAllocatedSequence: number, records: readonly AiMutationReceiptRecord[]) => AiMutationReceiptListSnapshot;
//# sourceMappingURL=aiMutationReceiptSnapshot.d.ts.map