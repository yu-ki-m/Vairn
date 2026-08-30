import type { McpCanvasRenderBounds, McpCanvasRenderTarget } from '#shared/mcp/renderTypes.js';
import type { CanvasRenderSnapshot, CanvasRenderStroke, CanvasStructureArrow, CanvasStructureNode } from '../services/canvasDocumentService.js';
export declare class CanvasRenderScopeError extends Error {
    readonly code: 'not_found' | 'invalid_input';
    constructor(code: 'not_found' | 'invalid_input', message: string);
}
export type ResolvedCanvasRenderScope = {
    bounds: McpCanvasRenderBounds;
    nodes: CanvasStructureNode[];
    arrows: CanvasStructureArrow[];
    strokes: CanvasRenderStroke[];
    nodeLookup: ReadonlyMap<string, CanvasStructureNode>;
};
type Point = {
    x: number;
    y: number;
};
export declare const nodeRenderBounds: (node: CanvasStructureNode) => McpCanvasRenderBounds;
export declare const arrowRenderPoints: (arrow: CanvasStructureArrow, nodes: ReadonlyMap<string, CanvasStructureNode>) => Point[];
export declare const arrowRenderBounds: (arrow: CanvasStructureArrow, nodes: ReadonlyMap<string, CanvasStructureNode>) => McpCanvasRenderBounds;
export declare const resolveCanvasRenderScope: ({ snapshot, target, activeViewport }: {
    snapshot: CanvasRenderSnapshot;
    target: McpCanvasRenderTarget;
    activeViewport?: McpCanvasRenderBounds;
}) => ResolvedCanvasRenderScope;
export {};
//# sourceMappingURL=canvasRenderScope.d.ts.map