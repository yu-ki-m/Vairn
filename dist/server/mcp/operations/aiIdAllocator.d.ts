export type AiObjectKind = 'node' | 'arrow' | 'view' | 'group' | 'layer';
export interface AiIdAllocatorOptions {
    now?: () => number;
    randomBytes?: () => Uint8Array;
    isReserved: (id: string) => boolean;
    maxAttempts?: number;
}
export interface AiObjectIdOptions {
    now?: () => number;
    randomBytes?: () => Uint8Array;
}
/** Creates an RFC 9562 UUIDv7 value with a server-owned time/random source. */
export declare const createAiObjectId: (kind: AiObjectKind, options?: AiObjectIdOptions) => string;
/** Retries on both document and provenance-registry reserved IDs. */
export declare const allocateAiObjectId: (kind: AiObjectKind, options: AiIdAllocatorOptions) => string;
//# sourceMappingURL=aiIdAllocator.d.ts.map