import * as Y from 'yjs';
export declare class CollaborationDocumentRegistry {
    private readonly documents;
    getWorkspaceDocument(workspaceId: string): Y.Doc;
    applyObjectState(workspaceId: string, objectId: string, state: Record<string, unknown>): void;
    getObjectState(workspaceId: string, objectId: string): Record<string, unknown> | undefined;
}
//# sourceMappingURL=collaborationDocuments.d.ts.map