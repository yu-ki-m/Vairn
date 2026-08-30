import type { GenericBatchOperation } from '../../../../shared/mcp/batchTypes.js';
import { type McpOperationRegistry } from './operationTypes.js';
export interface GenericCanvasNode {
    id: string;
    type: string;
    position: {
        x: number;
        y: number;
    };
    size: {
        width: number;
        height: number;
    };
    opacity?: number;
    rotation?: number;
    data: Record<string, unknown>;
    [key: string]: unknown;
}
export interface GenericArrowEndpoint {
    x: number;
    y: number;
    binding: {
        objectId: string;
        objectType: 'node';
        edge: string;
        offsetRatio: number;
    } | null;
}
export interface GenericCanvasArrow {
    id: string;
    type: 'arrow';
    lineType: string;
    lineStyle: string;
    color?: string;
    start: GenericArrowEndpoint;
    end: GenericArrowEndpoint;
    [key: string]: unknown;
}
export interface GenericObjectGroup {
    id: string;
    name: string;
    objectIds: string[];
    [key: string]: unknown;
}
export interface GenericCanvasDraft {
    id: string;
    nodes: GenericCanvasNode[];
    arrows: GenericCanvasArrow[];
    objectGroups?: GenericObjectGroup[];
    objectGroupViews?: Array<{
        id: string;
        name: string;
        groups: GenericObjectGroup[];
        [key: string]: unknown;
    }>;
    objectLayerGroups?: GenericObjectGroup[];
    [key: string]: unknown;
}
export interface GenericOperationResult {
    canvas: GenericCanvasDraft;
    affectedElementIds: readonly string[];
    /** A linked Drawio source is stored in the shared workspace document, not a canvas. */
    linkedDrawioEntry?: unknown;
    /** Prepared external image work; the executor commits or compensates it. */
    externalImagePreparation?: unknown;
}
export interface GenericOperationExecutionInput {
    canvas: GenericCanvasDraft;
    operation: GenericBatchOperation;
}
/**
 * Applies one already-schema-validated generic operation to a detached canvas
 * draft.  It never changes the supplied document, which lets the batch
 * executor construct deterministic forward/inverse patches before a CAS.
 */
export declare const applyGenericOperation: (source: GenericCanvasDraft, operation: GenericBatchOperation) => GenericOperationResult;
/** Generic operations are registered in deterministic schema/catalog order. */
export declare const createGenericOperations: () => McpOperationRegistry;
//# sourceMappingURL=genericOperations.d.ts.map