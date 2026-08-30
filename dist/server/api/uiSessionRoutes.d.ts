import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import type { PermissionAction } from '../../../shared/types/backend.js';
import { UiSessionProofRegistry, type UiSessionProofRecord } from '../auth/uiSessionProof.js';
import { type ServerConfig } from '../config/serverConfig.js';
export declare const UI_PROOF_COOKIE_NAME = "vairn_ui_proof";
export declare const UI_CSRF_HEADER_NAME = "x-vairn-csrf-token";
export interface UiSessionRoutesDeps {
    proofRegistry?: UiSessionProofRegistry;
}
export declare const readCookie: (cookieHeader: string | undefined, name: string) => string | undefined;
export interface UiProofAccessRequest {
    action: PermissionAction;
    stateChanging: boolean;
    /** WebSocket upgrades need Origin validation but have no CSRF header. */
    requireExactOrigin?: boolean;
}
/**
 * Guards internal UI routes.  MCP bearer credentials cannot satisfy this
 * check: a server-issued same-origin proof cookie is always required, and
 * mutations additionally require exact Origin plus the rotating CSRF token.
 */
export declare const requireUiProofAccess: (request: FastifyRequest, reply: FastifyReply, config: ServerConfig, registry: UiSessionProofRegistry, access: UiProofAccessRequest) => UiSessionProofRecord | undefined;
export declare const registerUiSessionRoutes: (server: FastifyInstance, config: ServerConfig, deps?: UiSessionRoutesDeps) => UiSessionProofRegistry;
//# sourceMappingURL=uiSessionRoutes.d.ts.map