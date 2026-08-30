import { FileOperationsService } from './fileOperationsService.js';
export interface TextEditOperation {
    start: number;
    end: number;
    text: string;
}
export declare class TextEditService {
    private readonly fileOperations;
    constructor(fileOperations: FileOperationsService);
    applyEdits(path: string, edits: TextEditOperation[], expectedHash?: string): Promise<{
        path: string;
        content: string;
        contentHash: string;
    }>;
}
//# sourceMappingURL=textEditService.d.ts.map