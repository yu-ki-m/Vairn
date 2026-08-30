export type EntityId = string;
export type WorkspaceRole = 'Owner' | 'Admin' | 'Editor' | 'Viewer';
export type StorageProfile = 'standalone-sqlite' | 'team-postgresql';
export type OperationStatus = 'queued' | 'running' | 'succeeded' | 'failed' | 'canceled' | 'superseded';
export type OperationType = 'artifact.gc' | 'file.delete' | 'file.index' | 'file.read' | 'file.write' | 'git.render' | 'image.process' | 'preview.render' | 'workspace.load' | 'workspace.save';
export type PermissionAction = 'artifact:read' | 'artifact:write' | 'audit:read' | 'collaboration:join' | 'file:delete' | 'file:read' | 'file:write' | 'git:render' | 'image:read' | 'image:write' | 'membership:manage' | 'preview:render' | 'settings:manage' | 'workspace:read' | 'workspace:write';
export interface WorkspaceUser {
    id: EntityId;
    displayName: string;
    authProvider: 'local' | 'external';
    isLocalOwner: boolean;
    createdAt: string;
    lastSeenAt: string;
}
export interface WorkspaceSession {
    sessionId: EntityId;
    user: WorkspaceUser;
    role: WorkspaceRole;
    readOnly: boolean;
    externalAccess: boolean;
    authRequired: boolean;
}
export interface WorkspaceMember {
    userId: EntityId;
    displayName: string;
    role: WorkspaceRole;
    authProvider: 'local' | 'external';
    firstSeenAt: string;
    lastSeenAt: string;
}
export interface WorkspaceAuditEvent {
    eventId: EntityId;
    workspaceId: EntityId;
    actorUserId: EntityId;
    action: string;
    targetType: string;
    targetId: string;
    result: 'allowed' | 'denied' | 'failed' | 'succeeded';
    timestamp: string;
    metadata?: Record<string, unknown>;
}
//# sourceMappingURL=backend.d.ts.map