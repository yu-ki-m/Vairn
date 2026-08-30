export type McpCanvasRenderBounds = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export type McpCanvasRenderTarget = {
    kind: 'activeViewport';
} | {
    kind: 'canvas';
} | {
    kind: 'view';
    viewId: string;
} | {
    kind: 'objects';
    objectIds: string[];
} | {
    kind: 'bounds';
    x: number;
    y: number;
    width: number;
    height: number;
};
export type McpCanvasRenderRequest = {
    canvasId?: string;
    target: McpCanvasRenderTarget;
    scale: 1 | 2;
};
export type McpCanvasRenderMetadata = {
    canvasId: string;
    revision: number;
    target: McpCanvasRenderTarget['kind'];
    bounds: McpCanvasRenderBounds;
    width: number;
    height: number;
    scale: 1 | 2;
    mimeType: 'image/png';
    warnings: string[];
};
//# sourceMappingURL=renderTypes.d.ts.map