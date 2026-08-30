import type { BasicBatchOperation } from '#shared/mcp/basicOperationTypes.js';
import type { AiProvenance } from '#shared/workspace/aiProvenance.js';
import { type GenericCanvasDraft, type GenericOperationResult } from './genericOperations.js';
import { type McpOperationRegistry } from './operationTypes.js';
export interface BasicOperationApplyOptions {
    readonly resolveCreateId: (tempRef: string) => string;
    readonly provenance: AiProvenance;
}
export interface BasicOperationExecutionInput {
    canvas: GenericCanvasDraft;
    operation: BasicBatchOperation;
    options: BasicOperationApplyOptions;
}
/** Applies a schema-validated create operation to a detached canonical draft. */
export declare const applyBasicOperation: (source: GenericCanvasDraft, operation: BasicBatchOperation, options: BasicOperationApplyOptions) => GenericOperationResult;
/** Basic block and connector creation operations in deterministic schema order. */
export declare const createBasicOperations: () => McpOperationRegistry;
//# sourceMappingURL=basicOperations.d.ts.map