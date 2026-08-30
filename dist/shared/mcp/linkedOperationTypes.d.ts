/** Shared input types for file-backed MCP block creation. */
export interface LinkedOperationPosition {
    x: number;
    y: number;
}
export interface LinkedOperationSize {
    width: number;
    height: number;
}
interface LinkedFileNodeOperationBase {
    kind: 'createLinkedFileNode';
    tempRef: string;
    path: string;
    position: LinkedOperationPosition;
    size?: LinkedOperationSize;
}
export type LinkedCodeNodeOperation = LinkedFileNodeOperationBase & {
    linkedType: 'code';
    /** One-based inclusive initial viewport hint; this is not source identity. */
    lineRange?: {
        startLine: number;
        endLine: number;
    };
};
export type LinkedMarkdownNodeOperation = LinkedFileNodeOperationBase & {
    linkedType: 'markdown-preview';
};
export type LinkedDrawioNodeOperation = LinkedFileNodeOperationBase & {
    linkedType: 'drawio';
    /** An XML source page; omitted selects its canonical first page. */
    pageId?: string;
};
export type LinkedFileNodeOperation = LinkedCodeNodeOperation | LinkedMarkdownNodeOperation | LinkedDrawioNodeOperation;
export interface LinkedGitDiffNodeOperation {
    kind: 'createGitDiffNode';
    tempRef: string;
    commitOid: string;
    filePath: string;
    position: LinkedOperationPosition;
    size?: LinkedOperationSize;
}
export interface LinkedImageNodeOperation {
    kind: 'createImageNode';
    tempRef: string;
    projectPath: string;
    position: LinkedOperationPosition;
    size?: LinkedOperationSize;
    alt?: string;
}
export type LinkedBatchOperation = LinkedFileNodeOperation | LinkedGitDiffNodeOperation | LinkedImageNodeOperation;
export type LinkedBatchOperationKind = LinkedBatchOperation['kind'];
export {};
//# sourceMappingURL=linkedOperationTypes.d.ts.map