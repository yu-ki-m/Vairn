import type { FastifyInstance } from 'fastify';
import type { ServerConfig } from '../config/serverConfig.js';
import { ProjectRootWatcher } from '../files/projectRootWatcher.js';
import type { NodeLockService } from '../collaboration/nodeLockService.js';
import type { StorageAdapter } from '../storage/StorageAdapter.js';
interface FilesRouteDeps {
    nodeLockService: NodeLockService;
    rootId: string;
    storage: StorageAdapter;
    watcher?: ProjectRootWatcher;
}
export declare const registerFilesRoutes: (server: FastifyInstance, config: ServerConfig, deps: FilesRouteDeps) => Promise<void>;
export {};
//# sourceMappingURL=filesRoutes.d.ts.map