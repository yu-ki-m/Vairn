import { ArtifactStore } from '../artifacts/artifactStore.js';
import type { ImageDerivative, ImageRepository } from './imageRepository.js';
export declare class ImageDerivativeService {
    private readonly repository;
    private readonly artifactStore;
    constructor(repository: ImageRepository, artifactStore: ArtifactStore);
    getOrCreate(imageId: string, variant: string): Promise<ImageDerivative>;
}
//# sourceMappingURL=imageDerivativeService.d.ts.map