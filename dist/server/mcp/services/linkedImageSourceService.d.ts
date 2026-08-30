import { AiImageIngestPreparationService, type PreparedAiImageIngest } from '../../images/aiImageIngestPreparationService.js';
import { FileOperationsService } from '../../files/fileOperationsService.js';
import type { LinkedImageSource } from '../operations/linkedOperations.js';
/** Server-owned project image resolver for MCP; it never accepts raw bytes or URLs. */
export declare class LinkedImageSourceService implements LinkedImageSource {
    private readonly files;
    private readonly preparation;
    constructor(files: Pick<FileOperationsService, 'readRasterImageFile'>, preparation: AiImageIngestPreparationService);
    prepareImage(input: {
        workspaceId: string;
        changeId: string;
        projectPath: string;
        now: string;
    }): Promise<PreparedAiImageIngest>;
    compensate(prepared: PreparedAiImageIngest): Promise<void>;
}
//# sourceMappingURL=linkedImageSourceService.d.ts.map