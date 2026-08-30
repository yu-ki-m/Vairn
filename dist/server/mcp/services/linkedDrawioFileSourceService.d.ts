import { FileOperationsService } from '../../files/fileOperationsService.js';
import type { LinkedDrawioSource } from '../operations/linkedOperations.js';
/**
 * Resolves linked Drawio sources exclusively through the configured project
 * root.  The returned identity matches the browser's canonical root/path
 * identity and the workspace-scoped drawio mutation service.
 */
export declare class LinkedDrawioFileSourceService implements LinkedDrawioSource {
    private readonly files;
    readonly rootId: string;
    readonly rootName: string;
    constructor(files: Pick<FileOperationsService, 'readDrawioFile'>, rootId: string, projectRoot: string);
    readDrawioFile(projectPath: string): Promise<{
        relativePath: string;
        fileName: string;
        format: "drawio-svg" | "dio-svg" | "drawio-png" | "dio-png" | "drawio-xml" | "dio-xml";
        sourceKey: string;
        resourceId: string;
        sourceRevision: string;
        pageIds: string[];
    }>;
}
//# sourceMappingURL=linkedDrawioFileSourceService.d.ts.map