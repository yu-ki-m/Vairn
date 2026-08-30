import type { FastifyInstance, FastifyRequest } from 'fastify';
import type { WorkspaceSession } from '../../../shared/types/backend.js';
import type { ExternalAuthGuard } from './session.js';
declare module 'fastify' {
    interface FastifyRequest {
        /** team モードで認証済みの場合のセッション（standalone では undefined）。 */
        workspaceSession?: WorkspaceSession;
    }
}
/**
 * 認証ゲートを通さないパスかどうか。
 * - 静的フロント（SPA シェル/アセット）はログイン前に読めないと困るので公開。
 * - `/api/*` と `/ws/*` は health を除き保護。
 */
export declare const isPublicAuthPath: (rawUrl: string) => boolean;
/**
 * Bearer トークンを取り出す。
 * - HTTP: `Authorization: Bearer <token>`。
 * - WebSocket: ブラウザの WebSocket は Authorization ヘッダを付けられないため、
 *   `?access_token=` / `?token=` クエリも受け付ける。
 */
export declare const extractBearerToken: (request: FastifyRequest) => string | undefined;
export interface AuthEnforcementHooks {
    /** 認証成功時（メンバーシップ記録などに使う）。非同期可。 */
    onAuthenticated?: (session: WorkspaceSession, request: FastifyRequest) => void | Promise<void>;
    /** 認証失敗時（監査記録などに使う）。 */
    onDenied?: (request: FastifyRequest) => void;
}
/**
 * team モードの認証強制を onRequest フックとして登録する。
 * 認証成功時は request.workspaceSession にセッションを載せ、失敗時は 401 を返す。
 */
export declare const registerAuthEnforcement: (server: FastifyInstance, guard: ExternalAuthGuard, hooks?: AuthEnforcementHooks) => void;
//# sourceMappingURL=authHook.d.ts.map