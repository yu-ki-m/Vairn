import type { PermissionAction, WorkspaceSession } from '../../../shared/types/backend.js';
export interface ExternalAuthGuard {
    requireAuthenticatedSession(token?: string): Promise<WorkspaceSession>;
}
export declare const createLocalOwnerSession: (externalAccess?: boolean) => WorkspaceSession;
export declare const requireSessionPermission: (session: WorkspaceSession, action: PermissionAction) => WorkspaceSession;
//# sourceMappingURL=session.d.ts.map