import type { GitRepositoryService } from './gitRepositoryService.js';
export type GitFileChangeType = 'added' | 'modified' | 'deleted' | 'renamed' | 'unsupported';
export interface GitCommitRow {
    oid: string;
    message: string;
    committedAt: string;
    authorName?: string;
    parentOids: string[];
}
export interface GitChangedFileRow {
    id: string;
    commitOid: string;
    path: string;
    previousPath?: string;
    changeType: GitFileChangeType;
    isBinary: boolean;
}
export interface GitFileDiffSource {
    status: 'ready' | 'binary' | 'too-large' | 'error';
    beforeText?: string;
    afterText?: string;
    message?: string;
}
export declare class GitStructuredService {
    private readonly repository;
    constructor(repository: GitRepositoryService);
    commits(limit?: number): Promise<GitCommitRow[]>;
    commitChanges(commitOid: string): Promise<GitChangedFileRow[]>;
    fileDiff(commitOid: string, path: string, previousPath: string | undefined, changeType: GitFileChangeType): Promise<GitFileDiffSource>;
    private changedRow;
    private readBlob;
}
//# sourceMappingURL=gitStructuredService.d.ts.map