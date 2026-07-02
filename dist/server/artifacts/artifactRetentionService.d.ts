export interface ArtifactRetentionCandidate {
    artifactPath: string;
    referenced: boolean;
    stale: boolean;
}
export declare class ArtifactRetentionService {
    collect(candidates: ArtifactRetentionCandidate[]): {
        removed: string[];
    };
}
//# sourceMappingURL=artifactRetentionService.d.ts.map