import type { PartitionRecord } from '../storage/StorageAdapter.js';
export declare const stableStringify: (value: unknown) => string;
export declare const hashPayload: (payload: unknown) => string;
export interface PartitionSaveInput<T = unknown> {
    workspaceId: string;
    partitionType: string;
    entityId: string;
    payload: T;
    baseVersion?: number;
}
export declare const createPartitionRecord: <T>(input: PartitionSaveInput<T>, previous?: PartitionRecord) => PartitionRecord<T>;
//# sourceMappingURL=partitionCodec.d.ts.map