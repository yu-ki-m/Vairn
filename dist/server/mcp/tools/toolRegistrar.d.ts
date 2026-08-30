import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { WorkspaceRole } from '../../../../shared/types/backend.js';
import type { McpOperationRegistry } from '../operations/operationTypes.js';
import type { CanvasDocumentService, WorkspaceOverviewAccess } from '../services/canvasDocumentService.js';
import type { OpenCanvasResult } from '../services/openCanvasRequestService.js';
import type { McpBatchEditService } from '../services/mcpBatchEditService.js';
import type { McpAuthorityLease } from '../services/currentMcpAuthorityResolver.js';
import type { CanvasTreeMutationService } from '../services/canvasTreeMutationService.js';
import type { CanvasRenderService } from '../rendering/canvasRenderService.js';
export type McpToolFamily = 'read' | 'write' | 'manage';
/** Dependencies are supplied by the authenticated per-session MCP route. */
export interface McpToolRegistrationContext {
    canvasDocuments?: Pick<CanvasDocumentService, 'loadWorkspaceOverview' | 'loadCanvasDetail' | 'loadNodeDetail' | 'searchCanvasContent' | 'loadActiveCanvas' | 'loadCanvasRenderSnapshot'>;
    /** Trusted server-only renderer for the authenticated user's readable canvas. */
    canvasRenderer?: CanvasRenderService;
    overviewAccess?: WorkspaceOverviewAccess;
    /** Authenticated human subject whose own live UI session may be consulted. */
    activeCanvasSubject?: string;
    /** Authenticated MCP client actor; never taken from a tool argument. */
    mcpActor?: string;
    /** Authenticated MCP role; never taken from a tool argument. */
    mcpRole?: WorkspaceRole;
    /** Shared production batch service used by both MCP and UI approval paths. */
    batchEdits?: McpBatchEditService;
    /** Shared safe coordinator for all persistent canvas/folder tree changes. */
    treeMutations?: Pick<CanvasTreeMutationService, 'createCanvas' | 'createFolder' | 'renameEntry' | 'moveEntry'>;
    /** Creates a server-owned lease only for a pending deletion confirmation. */
    issueMcpAuthorityLease?: () => McpAuthorityLease;
    /** Server-owned bridge to the selected UI tab. */
    openCanvasRequest?: {
        request(input: {
            workspaceId: 'local-workspace';
            actor: string;
            subject: string;
            canvasId: string;
        }): Promise<OpenCanvasResult>;
    };
}
export interface McpToolRegistrar {
    readonly family: McpToolFamily;
    register(server: McpServer, operations: readonly McpOperationRegistry[], context?: McpToolRegistrationContext): void;
}
//# sourceMappingURL=toolRegistrar.d.ts.map