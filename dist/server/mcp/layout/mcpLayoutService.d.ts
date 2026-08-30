import { type CanonicalNodeSizeKind } from '#shared/workspace/nodeSizeContracts.js';
export interface McpLayoutRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export type McpPlacement = {
    mode: 'absolute';
    x: number;
    y: number;
} | {
    mode: 'relative';
    anchorRef: string;
    direction: 'right' | 'left' | 'above' | 'below';
    gap?: number;
} | {
    mode: 'layout';
    layoutKey: string;
    algorithm: 'grid' | 'flow-lr' | 'tree';
    order: number;
    parentRef?: string;
};
export interface McpLayoutItem {
    id: string;
    kind: CanonicalNodeSizeKind;
    placement: McpPlacement;
}
export interface McpLayoutOptions {
    existingBounds?: Readonly<Record<string, McpLayoutRect>>;
}
/**
 * Pure canvas-coordinate placement.  It intentionally receives no viewport or
 * zoom state, so the output is stable across UI zoom levels and can be replayed
 * on the server.
 */
export declare const layoutMcpItems: (items: readonly McpLayoutItem[], options?: McpLayoutOptions) => Map<string, McpLayoutRect>;
//# sourceMappingURL=mcpLayoutService.d.ts.map