import type { RevisionToken } from './coreTypes.js';
import type { AiObjectId } from './operationCatalog.js';
import type { ViewBatchOperation } from './viewOperationTypes.js';
import type { BasicBatchOperation } from './basicOperationTypes.js';
import type { LinkedBatchOperation } from './linkedOperationTypes.js';
export declare const MAX_BATCH_EDIT_OPERATIONS = 200;
export declare const MAX_BATCH_EDIT_INPUT_BYTES = 1048576;
export declare const MAX_PUBLIC_RECEIPT_BYTES = 4194304;
export declare const MAX_INTERNAL_PATCH_BYTES = 16777216;
export type GenericBatchOperationKind = 'updateNode' | 'deleteNode' | 'updateArrow' | 'deleteArrow';
export type { LinkedBatchOperationKind } from './linkedOperationTypes.js';
export type { AiObjectId } from './operationCatalog.js';
export type { BasicOperationKind as BasicBatchOperationKind } from './basicOperationCatalog.js';
export type { BasicArrowEndpoint, BasicBatchOperation, BasicCalloutStyle, BasicFrameTitleVariant, BasicNodeEndpoint, BasicNodeType, BasicPointEndpoint, BasicTextBlockStyle, BasicTextRectangleStyle } from './basicOperationTypes.js';
export interface BatchEditRequest {
    canvasId: string;
    expectedRevision: RevisionToken;
    operations: readonly BatchEditOperation[];
}
export type GenericBatchOperation = {
    kind: 'updateNode';
    nodeRef: string;
    changes: Record<string, unknown>;
} | {
    kind: 'deleteNode';
    nodeRef: string;
} | {
    kind: 'updateArrow';
    arrowRef: string;
    changes: Record<string, unknown>;
} | {
    kind: 'deleteArrow';
    arrowRef: string;
};
export type { LinkedBatchOperation } from './linkedOperationTypes.js';
export type BatchEditOperation = GenericBatchOperation | BasicBatchOperation | LinkedBatchOperation | ViewBatchOperation;
export type BatchEditResult = {
    status: 'applied';
    batchId: string;
    newRevision: RevisionToken;
    idMap: Record<string, AiObjectId>;
    receiptId: string;
} | {
    status: 'pending_confirmation';
    pendingId: string;
    batchId: string;
};
//# sourceMappingURL=batchTypes.d.ts.map