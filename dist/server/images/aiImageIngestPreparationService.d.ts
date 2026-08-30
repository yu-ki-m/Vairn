import { ArtifactStore } from '../artifacts/artifactStore.js';
import type { AiExternalMutationIntent, PartitionCompareAndSwapInput, StorageAdapter } from '../storage/StorageAdapter.js';
import type { ImageDerivative, ManagedImageResource } from './imageRepository.js';
export interface PreparedAiImageIngest {
    intent: AiExternalMutationIntent;
    image: ManagedImageResource;
    derivatives: ImageDerivative[];
    metadataPartitions: ReadonlyArray<PartitionCompareAndSwapInput>;
}
export interface PrepareAiImageIngestInput {
    workspaceId: string;
    changeId: string;
    buffer: Buffer;
    mimeType: string;
    now: string;
    /** The canonical source path is used only to select the shared extension. */
    sourcePath: string;
}
/**
 * Prepares all filesystem work before the trusted AI workspace commit. The
 * caller supplies the committed intent to `commitAiMutation`, so metadata,
 * receipt, outbox, and intent transition are one database transaction.
 */
export declare class AiImageIngestPreparationService {
    private readonly storage;
    private readonly artifacts;
    constructor(storage: Pick<StorageAdapter, 'putAiExternalMutationIntent' | 'isImageArtifactReferenced'>, artifacts: ArtifactStore);
    prepare(input: PrepareAiImageIngestInput): Promise<PreparedAiImageIngest>;
    /** Safe after a failed commit or startup recovery; reused/shared artifacts remain intact. */
    compensate(intent: AiExternalMutationIntent): Promise<void>;
    private removeCreatedUnreferencedArtifacts;
}
//# sourceMappingURL=aiImageIngestPreparationService.d.ts.map