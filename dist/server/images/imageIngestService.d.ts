import { ArtifactStore } from '../artifacts/artifactStore.js';
import type { ImageRepository, ManagedImageResource } from './imageRepository.js';
export interface ImageIngestRequest {
    workspaceId: string;
    buffer: Buffer;
    mimeType: string;
}
export declare class ImageIngestService {
    private readonly repository;
    private readonly artifactStore;
    constructor(repository: ImageRepository, artifactStore: ArtifactStore);
    ingest(request: ImageIngestRequest): Promise<ManagedImageResource>;
}
//# sourceMappingURL=imageIngestService.d.ts.map