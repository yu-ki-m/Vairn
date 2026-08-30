import type { PreviewRenderResult } from './previewRenderService.js';
export interface PreviewOutput {
    outputKind: 'html' | 'image' | 'snapshot';
    htmlPayload?: string;
    artifactId?: string;
}
export declare const toPreviewOutput: (result: PreviewRenderResult) => PreviewOutput;
//# sourceMappingURL=previewOutputService.d.ts.map