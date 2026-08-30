export type BackendFileTreeEntryKind = 'file' | 'directory';
export interface BackendFileTreeEntry {
    id: string;
    name: string;
    relativePath: string;
    kind: BackendFileTreeEntryKind;
    depth: number;
    children: BackendFileTreeEntry[];
    childrenLoaded: boolean;
    draggable: boolean;
    size: number;
    mtime: string;
}
export interface FileTreeListOptions {
    path?: string;
    depth?: number;
    includeHidden?: boolean;
}
export declare class FileTreeService {
    private readonly projectRoot;
    constructor(projectRoot: string);
    listDirectory(options?: FileTreeListOptions): Promise<BackendFileTreeEntry[]>;
    private readEntries;
}
//# sourceMappingURL=fileTreeService.d.ts.map