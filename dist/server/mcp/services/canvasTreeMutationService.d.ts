import type { ToolError } from '#shared/mcp/coreTypes.js';
import type { WorkspaceRole } from '#shared/types/backend.js';
import { CanvasDocumentService } from './canvasDocumentService.js';
import { McpMutationCoordinator } from './mcpMutationCoordinator.js';
export interface CanvasTreeMutationContext {
    actor: string;
    subject: string;
    role: WorkspaceRole;
    expectedTreeRevision: number;
}
export type CreateCanvasInput = CanvasTreeMutationContext & {
    name: string;
    parentGroupId?: string;
};
export type CreateCanvasFolderInput = CanvasTreeMutationContext & {
    name: string;
    parentGroupId?: string;
};
export type RenameCanvasEntryInput = CanvasTreeMutationContext & {
    entryId: string;
    newName: string;
};
export type MoveCanvasEntryInput = CanvasTreeMutationContext & {
    entryId: string;
    newParentGroupId: string | null;
    position?: number;
};
export type CreateCanvasResult = {
    canvasId: string;
    revision: number;
    newTreeRevision: number;
};
export type CreateCanvasFolderResult = {
    groupId: string;
    newTreeRevision: number;
};
export type RenameCanvasEntryResult = {
    ok: true;
    entryId: string;
    newTreeRevision: number;
};
export type MoveCanvasEntryResult = {
    ok: true;
    entryId: string;
    newParentGroupId: string | null;
    position: number;
    newTreeRevision: number;
};
export declare class CanvasTreeMutationError extends Error {
    readonly toolError: ToolError;
    constructor(toolError: ToolError);
}
export interface CanvasTreeMutationServiceOptions {
    now?: () => string;
    createId?: (kind: 'change' | 'receipt' | 'event') => string;
}
/**
 * Performs all four persistent canvas-tree operations through the same trusted
 * CAS/journal/receipt/outbox coordinator as batch edits.  Public canvas IDs
 * intentionally address canvas leaf entries; their private physical tree IDs
 * remain an implementation detail of the browser document.
 */
export declare class CanvasTreeMutationService {
    private readonly documents;
    private readonly mutations;
    private readonly externalAccess;
    private readonly now;
    private readonly createId;
    constructor(documents: CanvasDocumentService, mutations: McpMutationCoordinator, options?: CanvasTreeMutationServiceOptions, externalAccess?: boolean);
    createCanvas(input: CreateCanvasInput): Promise<CreateCanvasResult>;
    createFolder(input: CreateCanvasFolderInput): Promise<CreateCanvasFolderResult>;
    renameEntry(input: RenameCanvasEntryInput): Promise<RenameCanvasEntryResult>;
    moveEntry(input: MoveCanvasEntryInput): Promise<MoveCanvasEntryResult>;
    private mutate;
    private resolveParent;
    private appendToParent;
    private removeFromParent;
    private assertCanvasWritable;
}
//# sourceMappingURL=canvasTreeMutationService.d.ts.map