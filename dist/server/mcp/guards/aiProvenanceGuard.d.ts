import { type AiProvenance, type AiProvenanceKind } from '#shared/workspace/aiProvenance.js';
export interface AiProvenanceRegistryEntry {
    kind: AiProvenanceKind;
    provenance: AiProvenance;
}
/** Injectable durable registry boundary; storage wiring is deliberately deferred. */
export interface AiProvenanceRegistryPort {
    get(workspaceId: string, id: string): AiProvenanceRegistryEntry | undefined;
    reserve(workspaceId: string, id: string, kind: AiProvenanceKind, provenance: AiProvenance): boolean;
}
export interface AsyncAiProvenanceRegistryPort {
    get(workspaceId: string, id: string): Promise<AiProvenanceRegistryEntry | undefined>;
    reserve(workspaceId: string, id: string, kind: AiProvenanceKind, provenance: AiProvenance): Promise<boolean>;
}
export interface ProvenanceTrackedRecord {
    id: string;
    kind: AiProvenanceKind;
    aiProvenance?: AiProvenance;
}
export interface AiProvenanceMutationInput {
    workspaceId: string;
    before: readonly ProvenanceTrackedRecord[];
    after: readonly ProvenanceTrackedRecord[];
    registry: AiProvenanceRegistryPort;
}
export interface AsyncAiProvenanceMutationInput extends Omit<AiProvenanceMutationInput, 'registry'> {
    registry: AsyncAiProvenanceRegistryPort;
}
/** Called only by the transaction coordinator for a newly trusted AI record. */
export declare const registerTrustedAiProvenance: (registry: AiProvenanceRegistryPort, workspaceId: string, id: string, kind: AiProvenanceKind, provenance: AiProvenance) => void;
/**
 * Validates ordinary workspace saves against the registry. Whole-record
 * deletion is permitted; restoration must use the same id, kind, and marker.
 */
export declare const assertAiProvenanceMutation: ({ workspaceId, before, after, registry }: AiProvenanceMutationInput) => void;
/** Async form used by ordinary workspace persistence backed by durable storage. */
export declare const assertAiProvenanceMutationAsync: ({ workspaceId, before, after, registry }: AsyncAiProvenanceMutationInput) => Promise<void>;
//# sourceMappingURL=aiProvenanceGuard.d.ts.map