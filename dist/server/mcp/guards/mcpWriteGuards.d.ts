import type { ToolError } from '../../../../shared/mcp/coreTypes.js';
import type { WorkspaceRole } from '../../../../shared/types/backend.js';
type HttpAuthorizationCode = 'HTTPS_REQUIRED' | 'ORIGIN_FORBIDDEN' | 'UNAUTHENTICATED' | 'MCP_AUDIENCE_REQUIRED' | 'MCP_SESSION_NOT_FOUND' | 'WORKSPACE_AUTHORITY_MISMATCH' | 'WORKSPACE_RECOVERY_PENDING' | 'PROTOCOL_VERSION_REQUIRED';
export type McpWriteAuthorizationResult = {
    kind: 'allowed';
} | {
    kind: 'http_error';
    status: 400 | 401 | 403 | 404 | 503;
    code: HttpAuthorizationCode;
} | {
    kind: 'tool_error';
    error: ToolError;
};
export interface McpWriteAuthorizationInput {
    effectiveTransportValid: boolean;
    originValid: boolean;
    authenticated: boolean;
    credentialAudience: 'mcp' | 'ui' | 'internal';
    sessionValid: boolean;
    fixedAuthorityValid: boolean;
    recoveryPending: boolean;
    protocolValid: boolean;
    toolSchemaValid: boolean;
    rateLimited?: {
        retryAfterMs: number;
        scope: string;
    };
    role: WorkspaceRole;
    isTeamWorkspace: boolean;
    aiWritesWorkspaceEnabled: boolean;
    targetExists: boolean;
    canvasAiWritePolicy: 'allow' | 'deny' | undefined;
    referenceMode: boolean;
    expectedRevision: unknown;
    currentRevision: unknown;
    locked: boolean;
    provenanceError?: ToolError;
    operationError?: ToolError;
}
export type McpPublicToolName = 'get_workspace_overview' | 'get_canvas' | 'get_node' | 'get_active_canvas' | 'render_canvas' | 'search' | 'open_canvas' | 'batch_edit' | 'create_canvas' | 'create_canvas_folder' | 'rename_canvas_entry' | 'move_canvas_entry' | 'get_pending_edit';
export interface McpPublicToolAuthorizationInput {
    tool: McpPublicToolName;
    credentialAudience: 'mcp' | 'ui' | 'internal';
    role: WorkspaceRole;
    isTeamWorkspace: boolean;
    aiWritesWorkspaceEnabled: boolean;
    requesterSubject?: string;
    requestedSubject?: string;
}
/**
 * Pure policy evaluation used by the coordinator after transport parsing.  The
 * first eight failures remain HTTP/protocol concerns; every later result is a
 * safe ToolError and follows the required mutation precedence exactly.
 */
export declare const evaluateMcpWriteAuthorization: (input: McpWriteAuthorizationInput) => McpWriteAuthorizationResult;
export declare const mayReadPendingEdit: (requester: Pick<{
    actor: string;
    subject: string;
    role: WorkspaceRole;
}, "actor" | "subject" | "role">, requestedSubject: string) => boolean;
/**
 * Matrix-level guard for public MCP tools.  Fine-grained canvas/revision/lock
 * checks remain in `evaluateMcpWriteAuthorization`; this function only answers
 * whether the authenticated MCP principal may reach that stage.
 */
export declare const mayUseMcpPublicTool: (input: McpPublicToolAuthorizationInput) => boolean;
export {};
//# sourceMappingURL=mcpWriteGuards.d.ts.map