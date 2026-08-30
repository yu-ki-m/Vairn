export type AiProvenanceKind = 'node' | 'arrow' | 'view' | 'group' | 'layer';
/** Durable marker for objects created by an approved AI mutation batch. */
export interface AiProvenance {
    origin: 'ai';
    batchId: string;
    createdAt: string;
    actor: string;
}
export declare const isAiObjectIdForKind: (id: string, kind: AiProvenanceKind) => boolean;
/** True for any server-owned AI UUID namespace, irrespective of object kind. */
export declare const isAiObjectId: (id: string) => boolean;
export declare const isAiProvenance: (value: unknown) => value is AiProvenance;
export declare const aiProvenanceEquals: (left: AiProvenance | undefined, right: AiProvenance | undefined) => boolean;
//# sourceMappingURL=aiProvenance.d.ts.map