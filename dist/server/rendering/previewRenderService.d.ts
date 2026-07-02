import type { PreviewSource } from './previewSourceService.js';
import type { RenderTrustPolicyService } from './renderTrustPolicy.js';
export interface PreviewRenderResult {
    previewId: string;
    sourceId: string;
    sourceHash: string;
    outputKind: 'html';
    htmlPayload: string;
    status: 'ready';
    createdAt: string;
}
/** Mermaid 等の図を SVG へ描画する依存。テストでは差し替え可能。 */
export interface DiagramRenderer {
    renderMermaidToSvg(code: string): Promise<string>;
}
export declare class PreviewRenderService {
    private readonly trustPolicy;
    private readonly diagramRenderer;
    private readonly markdown;
    constructor(trustPolicy: RenderTrustPolicyService, diagramRenderer?: DiagramRenderer);
    render(source: PreviewSource): Promise<PreviewRenderResult>;
    private injectMermaidDiagrams;
    private resolveMarkdownImageUrls;
}
//# sourceMappingURL=previewRenderService.d.ts.map