import type { BatchEditRequest, BatchEditResult } from '#shared/mcp/batchTypes.js';
import type { ToolError } from '#shared/mcp/coreTypes.js';
import type { WorkspaceRole } from '#shared/types/backend.js';
import type { NodeLockService } from '../../collaboration/nodeLockService.js';
import { BatchEditExecutor, type BatchEditExecutionInput } from '../execution/batchEditExecutor.js';
import { CanvasDocumentService } from './canvasDocumentService.js';
import type { McpAuthorityLease } from './currentMcpAuthorityResolver.js';
import { PendingEditStore, type McpPendingEditProjection, type PendingEditRecord } from './pendingEditStore.js';
export interface McpBatchEditRequestContext {
    actor: string;
    subject: string;
    role: WorkspaceRole;
    request: BatchEditRequest;
    /** Never client input: issued from the admitted MCP session on demand. */
    issueAuthorityLease: () => McpAuthorityLease;
}
export interface ApprovedBatchEditContext {
    actor: string;
    subject: string;
    role: WorkspaceRole;
    pending: PendingEditRecord;
    preparePendingTerminal?: BatchEditExecutionInput['preparePendingTerminal'];
}
export declare class McpBatchEditToolError extends Error {
    readonly toolError: ToolError;
    constructor(toolError: ToolError);
}
/** Converts only known, already-sanitized mutation failures into ToolError. */
export declare const toMcpBatchEditToolError: (error: unknown) => ToolError | undefined;
/**
 * The single mutation entry point shared by public MCP handlers and the UI
 * confirmation route.  It intentionally re-runs all runtime guards before an
 * approved pending batch reaches the transactional executor.
 */
export declare class McpBatchEditService {
    private readonly documents;
    private readonly executor;
    private readonly pendingEdits;
    private readonly nodeLocks;
    private readonly externalAccess;
    constructor(documents: CanvasDocumentService, executor: BatchEditExecutor, pendingEdits: PendingEditStore, nodeLocks: Pick<NodeLockService, 'snapshot'>, externalAccess: boolean);
    request(input: McpBatchEditRequestContext): Promise<BatchEditResult>;
    approve(input: ApprovedBatchEditContext): Promise<Extract<BatchEditResult, {
        status: 'applied';
    }>>;
    getPending(input: {
        pendingId: string;
        subject: string;
        role: WorkspaceRole;
    }): Promise<McpPendingEditProjection>;
    private prepare;
    private execute;
}
//# sourceMappingURL=mcpBatchEditService.d.ts.map