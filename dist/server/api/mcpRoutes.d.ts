import type { FastifyInstance } from 'fastify';
import { type ServerConfig } from '../config/serverConfig.js';
import { type McpTeamAuthenticator } from '../mcp/mcpAuthorization.js';
import { McpSessionRegistry } from '../mcp/mcpSessionRegistry.js';
import { McpRateLimiter } from '../mcp/mcpRateLimiter.js';
import type { CurrentMcpAuthorityResolver } from '../mcp/services/currentMcpAuthorityResolver.js';
import type { CanvasDocumentService } from '../mcp/services/canvasDocumentService.js';
import type { OpenCanvasRequestService } from '../mcp/services/openCanvasRequestService.js';
import type { McpBatchEditService } from '../mcp/services/mcpBatchEditService.js';
import type { CanvasTreeMutationService } from '../mcp/services/canvasTreeMutationService.js';
import type { CanvasRenderService } from '../mcp/rendering/canvasRenderService.js';
import type { WorkspaceRecoveryUnavailable } from '../../../shared/mcp/coreTypes.js';
export interface McpRoutesDeps {
    sessionRegistry?: McpSessionRegistry;
    rateLimiter?: McpRateLimiter;
    teamAuthenticator?: McpTeamAuthenticator;
    authorityResolver?: CurrentMcpAuthorityResolver;
    /** The only canonical document reader made available to public read tools. */
    canvasDocuments?: CanvasDocumentService;
    /** Server-only PNG renderer for public read tools. */
    canvasRenderer?: CanvasRenderService;
    /** Server-owned UI bridge used only by the non-mutating canvas-open tool. */
    openCanvasRequestService?: OpenCanvasRequestService;
    /** Shared safety kernel for public batch mutation and UI approval. */
    batchEditService?: McpBatchEditService;
    /** Shared safe coordinator for persistent canvas and folder tree operations. */
    canvasTreeMutationService?: CanvasTreeMutationService;
    /** Checked only after authentication/session binding and before rate/tool work. */
    recoveryGate?: () => Promise<WorkspaceRecoveryUnavailable | undefined>;
}
/** Streamable HTTP entry point. No mutation-capable tool is registered here. */
export declare const registerMcpRoutes: (fastify: FastifyInstance, config: ServerConfig, deps?: McpRoutesDeps) => McpSessionRegistry;
//# sourceMappingURL=mcpRoutes.d.ts.map