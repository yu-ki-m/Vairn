import { FileTreeService } from '../files/fileTreeService.js';
export interface SearchIndexEntry {
    path: string;
    name: string;
    kind: 'file';
    contentHash?: string;
    content?: string;
    indexStatus: 'indexed' | 'metadata-only';
}
export declare class SearchIndexService {
    private readonly projectRoot;
    private readonly fileTreeService;
    private readonly index;
    constructor(projectRoot: string, fileTreeService?: FileTreeService);
    rebuild(): Promise<void>;
    invalidate(paths: string[]): void;
    all(): SearchIndexEntry[];
    private indexEntries;
}
//# sourceMappingURL=searchIndexService.d.ts.map