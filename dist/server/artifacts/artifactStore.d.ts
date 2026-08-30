export interface ArtifactWriteResult {
    artifactId: string;
    artifactPath: string;
    contentHash: string;
    byteSize: number;
}
export declare class ArtifactStore {
    private readonly artifactsDir;
    constructor(artifactsDir: string);
    write(buffer: Buffer, extension?: string): ArtifactWriteResult;
    read(artifactPath: string): Buffer;
}
//# sourceMappingURL=artifactStore.d.ts.map