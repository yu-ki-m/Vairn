import type { FastifyInstance } from 'fastify';
import type { StorageAdapter } from '../storage/StorageAdapter.js';
import type { ServerConfig } from '../config/serverConfig.js';
import type { UiSessionProofRegistry } from '../auth/uiSessionProof.js';
import type { NodeLockService } from '../collaboration/nodeLockService.js';
import type { WorkspaceLifecycleGuard } from '../workspace/workspaceLifecycleGuard.js';
import type { AiUiSessionRegistry } from '../realtime/aiUiSessionRegistry.js';
import { AiChangeLogService } from '../mcp/services/aiChangeLogService.js';
import { PendingEditStore, type PendingEditRecord, type UiPendingEditProjection } from '../mcp/services/pendingEditStore.js';
export declare const AI_UI_CONNECTION_HEADER = "x-vairn-ui-connection-id";
interface AiControlRouteDeps {
    proofRegistry?: UiSessionProofRegistry;
    aiUiSessions?: AiUiSessionRegistry;
    nodeLockService?: NodeLockService;
    changeLogService?: AiChangeLogService;
    pendingEditStore?: PendingEditStore;
    applyPendingApproval?: (pending: PendingEditRecord) => Promise<UiPendingEditProjection>;
    lifecycleGuard?: WorkspaceLifecycleGuard;
}
/**
 * UI-only receipt endpoints.  This deliberately mounts no arbitrary patch
 * endpoint: replay derives all content from a receipt loaded by its ID.
 */
export declare const registerAiControlRoutes: (server: FastifyInstance, config: ServerConfig, storage: StorageAdapter, deps?: AiControlRouteDeps) => Promise<void>;
export {};
//# sourceMappingURL=aiControlRoutes.d.ts.map