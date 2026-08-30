export interface FileReadResult {
    path: string;
    content: string;
    contentHash: string;
    encoding: BufferEncoding;
    size: number;
    mtime: string;
}
export interface FileWriteRequest {
    path: string;
    content: string;
    baseHash?: string;
    expectedHash?: string;
}
export declare const hashBuffer: (buffer: Buffer | string) => string;
export declare const isDrawioFilePath: (value: string) => boolean;
export declare const validateDrawioBuffer: (relativePath: string, buffer: Buffer) => void;
export interface FileBinaryReadResult {
    path: string;
    buffer: Buffer;
    contentType: string;
    size: number;
}
export interface DrawioFileReadResult extends FileBinaryReadResult {
    contentHash: string;
    mtime: string;
}
export declare class DrawioFileConflictError extends Error {
    readonly code = "DRAWIO_SOURCE_CONFLICT";
    constructor(message: string);
}
export declare class FileConflictError extends Error {
    readonly code = "CONFLICT";
    constructor(message: string);
}
export declare class FileOperationsService {
    private readonly projectRoot;
    constructor(projectRoot: string);
    readTextFile(relativePath: string, encoding?: BufferEncoding): Promise<FileReadResult>;
    writeTextFile(request: FileWriteRequest): Promise<FileReadResult>;
    readBinaryFile(relativePath: string): Promise<FileBinaryReadResult>;
    readDrawioFile(relativePath: string): Promise<DrawioFileReadResult>;
    statDrawioFile(relativePath: string): Promise<{
        path: string;
        size: number;
        mtime: string;
    }>;
    writeDrawioFile(input: {
        path: string;
        buffer: Buffer;
        expectedHash?: string;
    }): Promise<DrawioFileReadResult>;
    writeBinaryFile(relativePath: string, base64: string): Promise<{
        path: string;
        size: number;
    }>;
    createEntry(relativePath: string, kind: 'file' | 'directory'): Promise<{
        path: string;
        kind: 'file' | 'directory';
    }>;
    /**
     * Legacy mutation routes cannot safely update linked-file registry entries.
     * Reject direct drawio targets and directories containing any drawio source.
     */
    assertLegacyMutationAllowed(relativePaths: string[]): Promise<void>;
    private containsDrawioSource;
    renameEntry(from: string, to: string): Promise<{
        from: string;
        to: string;
    }>;
    moveEntries(paths: string[], targetDirectory: string): Promise<Array<{
        from: string;
        to: string;
    }>>;
    deleteEntries(paths: string[]): Promise<{
        deleted: string[];
    }>;
}
//# sourceMappingURL=fileOperationsService.d.ts.map