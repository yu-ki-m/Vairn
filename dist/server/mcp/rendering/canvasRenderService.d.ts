import type { McpCanvasRenderMetadata, McpCanvasRenderRequest } from '#shared/mcp/renderTypes.js';
import { type CanvasDocumentService } from '../services/canvasDocumentService.js';
export declare class CanvasRenderError extends Error {
    readonly code: 'not_found' | 'invalid_input' | 'payload_too_large' | 'revision_mismatch';
    constructor(code: 'not_found' | 'invalid_input' | 'payload_too_large' | 'revision_mismatch', message: string);
}
export type CanvasRenderResult = {
    metadata: McpCanvasRenderMetadata;
    png: Buffer;
};
export declare class CanvasRenderService {
    private readonly canvasDocuments;
    constructor(canvasDocuments: CanvasDocumentService);
    render({ request, subject }: {
        request: McpCanvasRenderRequest;
        subject?: string;
    }): Promise<CanvasRenderResult>;
}
//# sourceMappingURL=canvasRenderService.d.ts.map