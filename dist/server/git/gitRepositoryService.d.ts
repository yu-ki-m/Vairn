export interface GitStatusSummary {
    repository: boolean;
    branch?: string;
    changes: string[];
    error?: string;
}
export declare class GitRepositoryService {
    private readonly projectRoot;
    constructor(projectRoot: string);
    status(): Promise<GitStatusSummary>;
    git(args: string[]): Promise<string>;
    gitRaw(args: string[]): Promise<Buffer>;
}
//# sourceMappingURL=gitRepositoryService.d.ts.map