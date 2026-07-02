import type { GitRepositoryService } from './gitRepositoryService.js';
export interface GitHistoryRow {
    oid: string;
    subject: string;
    author: string;
    date: string;
}
export declare class GitRenderSourceService {
    private readonly repository;
    constructor(repository: GitRepositoryService);
    history(limit?: number): Promise<GitHistoryRow[]>;
    diff(pathFilter?: string): Promise<string>;
}
//# sourceMappingURL=gitRenderSourceService.d.ts.map