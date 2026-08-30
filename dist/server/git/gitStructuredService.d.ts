import type { GitRepositoryService } from './gitRepositoryService.js';
/** コミットではなくインデックス（ステージ済み変更）を表す予約 OID。 */
export declare const STAGED_CHANGES_OID = "staged";
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
    /**
     * ステージ済み（インデックスに登録された）変更ファイル一覧を返す。
     * 差分は HEAD 対インデックス（コミットが無い場合は空ツリー対インデックス）。
     */
    stagedChanges(): Promise<GitChangedFileRow[]>;
    private parseNameStatus;
    /**
     * ステージ済みファイルの差分元テキストを返す。
     * before は HEAD の内容（追加/コミット無しは空）、after はインデックスのステージ済み内容。
     */
    stagedFileDiff(path: string, previousPath: string | undefined, changeType: GitFileChangeType): Promise<GitFileDiffSource>;
    private hasHead;
    fileDiff(commitOid: string, path: string, previousPath: string | undefined, changeType: GitFileChangeType): Promise<GitFileDiffSource>;
    private changedRow;
    private readBlob;
}
//# sourceMappingURL=gitStructuredService.d.ts.map