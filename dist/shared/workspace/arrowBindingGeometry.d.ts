/**
 * Pure persisted-canvas geometry for a node-bound arrow endpoint.  It mirrors
 * the editor's visual anchor calculation without importing browser UI code.
 */
export type ArrowBindingEdge = 'top' | 'right' | 'bottom' | 'left';
export interface ArrowBindingAnchorNode {
    position: {
        x: number;
        y: number;
    };
    size: {
        width: number;
        height: number;
    };
    scale?: unknown;
    rotation?: unknown;
}
export interface ArrowBindingAnchor {
    edge: unknown;
    offsetRatio: unknown;
}
/** Resolves the rendered point for a persisted node-edge binding. */
export declare const resolveArrowBindingAnchor: (node: ArrowBindingAnchorNode, binding: ArrowBindingAnchor) => {
    x: number;
    y: number;
};
//# sourceMappingURL=arrowBindingGeometry.d.ts.map