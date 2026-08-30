import type { FastifyInstance } from 'fastify';
import type { ServerConfig } from '../config/serverConfig.js';
import { NodeLockService } from '../collaboration/nodeLockService.js';
export declare const registerNodeLockRoutes: (server: FastifyInstance, _config: ServerConfig, nodeLockService: NodeLockService) => Promise<void>;
//# sourceMappingURL=nodeLockRoutes.d.ts.map