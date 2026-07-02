import Fastify from 'fastify';
import type { ServerConfig } from '../config/serverConfig.js';
import { type ExternalAuthGuard } from '../auth/session.js';
export interface CreateServerDeps {
    /** 認証ガードの差し替え口（テストでスタブを注入する）。未指定なら Cognito 設定から生成。 */
    authGuard?: ExternalAuthGuard;
}
export declare const createServer: (config: ServerConfig, deps?: CreateServerDeps) => Promise<Fastify.FastifyInstance<import("node:http").Server<typeof import("node:http").IncomingMessage, typeof import("node:http").ServerResponse>, import("node:http").IncomingMessage, import("node:http").ServerResponse<import("node:http").IncomingMessage>, Fastify.FastifyBaseLogger, Fastify.FastifyTypeProviderDefault>>;
//# sourceMappingURL=createServer.d.ts.map