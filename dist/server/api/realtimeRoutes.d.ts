import type { FastifyInstance } from 'fastify';
import type { ServerConfig } from '../config/serverConfig.js';
import type { NodeLockService } from '../collaboration/nodeLockService.js';
import type { ProjectRootWatcher } from '../files/projectRootWatcher.js';
interface RealtimeRouteDeps {
    nodeLockService?: NodeLockService;
    projectRootWatcher?: ProjectRootWatcher;
}
export declare const registerRealtimeRoutes: (server: FastifyInstance, config: ServerConfig, deps?: RealtimeRouteDeps) => Promise<void>;
export {};
//# sourceMappingURL=realtimeRoutes.d.ts.map