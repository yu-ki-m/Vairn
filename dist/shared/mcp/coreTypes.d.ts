export declare const MAX_REVISION_TOKEN: number;
export declare const MAX_RECEIPT_SEQUENCE: number;
/** Branded only at the type boundary; runtime validation is in coreSchemas. */
export type RevisionToken = number;
export type ReceiptSequenceToken = number;
export interface FixedWorkspaceAuthority {
    workspaceId: 'local-workspace';
    partitionType: 'workspace';
    entityId: 'primary-workspace';
}
export interface McpAccessContext extends FixedWorkspaceAuthority {
    actor: string;
    subject: string;
    role: 'Owner' | 'Admin' | 'Editor' | 'Viewer';
    credentialAudience: 'mcp';
    protocolVersion: '2025-11-25';
    credentialFingerprint: string;
}
export type ToolErrorCode = 'invalid_input' | 'not_found' | 'ai_writes_disabled' | 'reference_mode' | 'not_authorized' | 'locked' | 'revision_mismatch' | 'cross_canvas_binding' | 'outside_project_root' | 'unsupported_file' | 'unsupported_operation' | 'layer_protected' | 'view_protected' | 'cursor_expired' | 'confirmation_expired' | 'payload_too_large' | 'rate_limited' | 'internal_error';
export type ToolError = {
    code: Exclude<ToolErrorCode, 'rate_limited' | 'internal_error'>;
    message: string;
} | {
    code: 'rate_limited';
    message: string;
    details: {
        retryAfterMs: number;
        scope: string;
    };
} | {
    code: 'internal_error';
    message: string;
    details: {
        correlationId: string;
        retryable: boolean;
    };
};
export interface SessionCapacityUnavailable {
    code: 'rate_limited';
    message: 'Session capacity is temporarily unavailable.';
    details: {
        scope: 'mcp_sessions_subject' | 'mcp_sessions_workspace' | 'ui_sessions_subject' | 'ui_sessions_process';
        retryAfterMs: number;
    };
}
export interface WorkspaceRecoveryUnavailable {
    code: 'workspace_recovery_pending';
    message: string;
    retryAfterMs: number;
    correlationId: string;
}
export interface McpProtectedResourceMetadata {
    resource: string;
    authorization_servers: [string];
    scopes_supported: ['vairn/mcp'];
    bearer_methods_supported: ['header'];
}
export interface UiProofResult {
    csrfToken: string;
    idleExpiresAt: string;
    absoluteExpiresAt: string;
}
export interface UiAccessContext {
    workspaceId: 'local-workspace';
    subject: string;
    role: 'Owner' | 'Admin' | 'Editor' | 'Viewer';
    credentialAudience: 'ui';
    uiSessionId: string;
    connectionId?: string;
    origin: string;
    csrfValid: boolean;
}
/** The server-owned lifecycle record; its secret cookie value is not exposed. */
export interface UiSessionProofLifecycle {
    uiSessionId: string;
    workspaceId: 'local-workspace';
    actor: string;
    subject: string;
    origin: string;
    issuedAt: string;
    idleExpiresAt: string;
    absoluteExpiresAt: string;
    lastUserInteractionAt: string;
}
export interface UiConnectionHandle {
    connectionId: string;
    uiSessionId: string;
    workspaceId: 'local-workspace';
    actor: string;
    subject: string;
    origin: string;
}
export interface AiRealtimeUiSessionReady {
    type: 'ui-session-ready';
    connectionId: string;
}
export interface AiRealtimeAcknowledgement {
    type: 'ai-mutation-ack';
    eventId: string;
    receiptId: string;
    status: 'applied' | 'conflict';
}
export interface AiRealtimeOpenCanvasAcknowledgement {
    type: 'ai-open-canvas-ack';
    requestId: string;
    actor: string;
    subject: string;
    connectionId: string;
    status: 'delivered' | 'deferred';
}
//# sourceMappingURL=coreTypes.d.ts.map