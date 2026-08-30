import type { ViewBatchOperation } from '#shared/mcp/viewOperationTypes.js';
import { type AiProvenance } from '#shared/workspace/aiProvenance.js';
import { type GenericCanvasDraft, type GenericOperationResult } from './genericOperations.js';
import { type McpOperationRegistry } from './operationTypes.js';
export interface ViewOperationApplyOptions {
    readonly resolveCreateId: (tempRef: string) => string;
    readonly provenance: AiProvenance;
    /** Allows createLayer to refer to a node or arrow created later in the same batch. */
    readonly isObjectCreateReference?: (tempRef: string) => boolean;
}
export interface ViewOperationExecutionInput {
    canvas: GenericCanvasDraft;
    operation: ViewBatchOperation;
    options: ViewOperationApplyOptions;
}
export declare const applyViewOperation: (source: GenericCanvasDraft, operation: ViewBatchOperation, options: ViewOperationApplyOptions) => GenericOperationResult;
export declare const createViewOperations: () => McpOperationRegistry;
//# sourceMappingURL=viewOperations.d.ts.map