import type { StorageAdapter } from '../../storage/StorageAdapter.js';
import type { AiProvenanceKind } from '../../../../shared/workspace/aiProvenance.js';
import { type AiProvenanceRegistryEntry, type AsyncAiProvenanceRegistryPort, type ProvenanceTrackedRecord } from './aiProvenanceGuard.js';
/**
 * Reads only the marker locations that are part of the persisted workspace
 * contract. This intentionally excludes clipboard and public read models.
 */
export declare const collectWorkspaceProvenanceRecords: (payload: unknown) => ProvenanceTrackedRecord[];
/** Async adapter over the private, workspace-lifetime storage registry. */
export declare class StorageAiProvenanceRegistry implements AsyncAiProvenanceRegistryPort {
    private readonly storage;
    constructor(storage: StorageAdapter);
    get(workspaceId: string, id: string): Promise<AiProvenanceRegistryEntry | undefined>;
    reserve(workspaceId: string, id: string, kind: AiProvenanceKind, provenance: AiProvenanceRegistryEntry['provenance']): Promise<boolean>;
}
/**
 * Normal UI persistence is allowed to delete an AI record, but all surviving
 * and restored records must exactly match the non-public registry entry.
 */
export declare const assertWorkspaceProvenanceMutation: (input: {
    workspaceId: string;
    beforePayload: unknown;
    afterPayload: unknown;
    storage: StorageAdapter;
}) => Promise<void>;
//# sourceMappingURL=storageAiProvenanceRegistry.d.ts.map