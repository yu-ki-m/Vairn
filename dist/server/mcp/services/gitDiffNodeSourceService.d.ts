import type { GitStructuredService } from '../../git/gitStructuredService.js';
import type { GitDiffNodeSource } from '../operations/linkedOperations.js';
/** Resolves Git diff node identity from the server's own repository view. */
export declare class GitDiffNodeSourceService implements GitDiffNodeSource {
    private readonly git;
    constructor(git: Pick<GitStructuredService, 'commitChanges'>);
    readChangedFile(commitOid: string, filePath: string): Promise<{
        changeType: import("../../git/gitStructuredService.js").GitFileChangeType;
        previousPath?: string | undefined;
        path: string;
    }>;
}
//# sourceMappingURL=gitDiffNodeSourceService.d.ts.map