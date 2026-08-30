import type { LinkedBatchOperationKind } from './linkedOperationTypes.js';
/** Stable public operation vocabulary; dispatchers register these exact kinds. */
export declare const LINKED_BATCH_OPERATION_KINDS: readonly ["createLinkedFileNode", "createGitDiffNode", "createImageNode"];
/** The three source classes encoded by createLinkedFileNode. */
export declare const LINKED_FILE_NODE_TYPES: readonly ["code", "markdown-preview", "drawio"];
export declare const isLinkedBatchOperationKind: (value: string) => value is LinkedBatchOperationKind;
//# sourceMappingURL=linkedOperationCatalog.d.ts.map