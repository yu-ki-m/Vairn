import { FileOperationsService } from '../../files/fileOperationsService.js';
import type { LinkedTextFileSource } from '../operations/linkedOperations.js';
export declare class LinkedTextFileSourceService implements LinkedTextFileSource {
    private readonly files;
    readonly rootName: string;
    constructor(files: Pick<FileOperationsService, 'readTextFile'>, projectRoot: string);
    readTextFile(projectPath: string): Promise<{
        relativePath: string;
        content: string;
    }>;
}
//# sourceMappingURL=linkedTextFileSourceService.d.ts.map