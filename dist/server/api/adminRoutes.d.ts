import type { FastifyInstance } from 'fastify';
import type { ServerConfig } from '../config/serverConfig.js';
import type { AuditStore } from '../workspace/audit.js';
import type { MemberStore } from '../workspace/membershipRegistry.js';
export interface AdminRoutesDeps {
    auditStore: AuditStore;
    memberStore: MemberStore;
}
/**
 * メンバー一覧 / 監査ログの読み取り API（team 管理 UI 用）。
 * - `/api/members` は membership:manage、`/api/audit` は audit:read 権限が必要（Owner/Admin）。
 * - team モードでは onRequest フックが認証済み（request.workspaceSession）。standalone は local Owner。
 */
export declare const registerAdminRoutes: (server: FastifyInstance, config: ServerConfig, deps: AdminRoutesDeps) => Promise<void>;
//# sourceMappingURL=adminRoutes.d.ts.map