import type { FastifyInstance } from 'fastify';
import type { ServerConfig } from '../config/serverConfig.js';
import type { StorageAdapter } from '../storage/StorageAdapter.js';
import type { NodeLockService } from '../collaboration/nodeLockService.js';
interface WorkspaceRouteDeps {
    nodeLockService?: NodeLockService;
    rootId?: string;
}
export declare const registerWorkspaceRoutes: (server: FastifyInstance, config: ServerConfig, storage: StorageAdapter, deps?: WorkspaceRouteDeps) => Promise<void>;
export {};
//# sourceMappingURL=workspaceRoutes.d.ts.map