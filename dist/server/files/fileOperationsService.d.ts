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
export interface FileBinaryReadResult {
    path: string;
    buffer: Buffer;
    contentType: string;
    size: number;
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
    writeBinaryFile(relativePath: string, base64: string): Promise<{
        path: string;
        size: number;
    }>;
    createEntry(relativePath: string, kind: 'file' | 'directory'): Promise<{
        path: string;
        kind: 'file' | 'directory';
    }>;
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