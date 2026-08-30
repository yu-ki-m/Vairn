import { z } from 'zod';
export declare const revisionTokenSchema: z.ZodNumber;
export declare const receiptSequenceTokenSchema: z.ZodNumber;
export declare const fixedWorkspaceAuthoritySchema: z.ZodObject<{
    workspaceId: z.ZodLiteral<"local-workspace">;
    partitionType: z.ZodLiteral<"workspace">;
    entityId: z.ZodLiteral<"primary-workspace">;
}, z.core.$strict>;
export declare const toolErrorSchema: z.ZodUnion<readonly [...z.ZodObject<{
    code: z.ZodLiteral<"invalid_input" | "not_found" | "ai_writes_disabled" | "reference_mode" | "not_authorized" | "locked" | "revision_mismatch" | "cross_canvas_binding" | "outside_project_root" | "unsupported_file" | "unsupported_operation" | "layer_protected" | "view_protected" | "cursor_expired" | "confirmation_expired" | "payload_too_large">;
    message: z.ZodString;
}, z.core.$strict>[], z.ZodObject<{
    code: z.ZodLiteral<"rate_limited">;
    message: z.ZodString;
    details: z.ZodObject<{
        retryAfterMs: z.ZodNumber;
        scope: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    code: z.ZodLiteral<"internal_error">;
    message: z.ZodString;
    details: z.ZodObject<{
        correlationId: z.ZodString;
        retryable: z.ZodBoolean;
    }, z.core.$strict>;
}, z.core.$strict>]>;
export declare const sessionCapacityUnavailableSchema: z.ZodObject<{
    code: z.ZodLiteral<"rate_limited">;
    message: z.ZodLiteral<"Session capacity is temporarily unavailable.">;
    details: z.ZodObject<{
        scope: z.ZodEnum<{
            mcp_sessions_subject: "mcp_sessions_subject";
            mcp_sessions_workspace: "mcp_sessions_workspace";
            ui_sessions_subject: "ui_sessions_subject";
            ui_sessions_process: "ui_sessions_process";
        }>;
        retryAfterMs: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export declare const workspaceRecoveryUnavailableSchema: z.ZodObject<{
    code: z.ZodLiteral<"workspace_recovery_pending">;
    message: z.ZodString;
    retryAfterMs: z.ZodNumber;
    correlationId: z.ZodString;
}, z.core.$strict>;
export declare const mcpProtectedResourceMetadataSchema: z.ZodObject<{
    resource: z.ZodURL;
    authorization_servers: z.ZodTuple<[z.ZodURL], null>;
    scopes_supported: z.ZodTuple<[z.ZodLiteral<"vairn/mcp">], null>;
    bearer_methods_supported: z.ZodTuple<[z.ZodLiteral<"header">], null>;
}, z.core.$strict>;
export declare const uiProofResultSchema: z.ZodObject<{
    csrfToken: z.ZodString;
    idleExpiresAt: z.ZodISODateTime;
    absoluteExpiresAt: z.ZodISODateTime;
}, z.core.$strict>;
export declare const uiAccessContextSchema: z.ZodObject<{
    workspaceId: z.ZodLiteral<"local-workspace">;
    subject: z.ZodString;
    role: z.ZodEnum<{
        Owner: "Owner";
        Admin: "Admin";
        Editor: "Editor";
        Viewer: "Viewer";
    }>;
    credentialAudience: z.ZodLiteral<"ui">;
    uiSessionId: z.ZodString;
    connectionId: z.ZodOptional<z.ZodString>;
    origin: z.ZodURL;
    csrfValid: z.ZodBoolean;
}, z.core.$strict>;
export declare const uiSessionProofLifecycleSchema: z.ZodObject<{
    uiSessionId: z.ZodString;
    workspaceId: z.ZodLiteral<"local-workspace">;
    actor: z.ZodString;
    subject: z.ZodString;
    origin: z.ZodURL;
    issuedAt: z.ZodISODateTime;
    idleExpiresAt: z.ZodISODateTime;
    absoluteExpiresAt: z.ZodISODateTime;
    lastUserInteractionAt: z.ZodISODateTime;
}, z.core.$strict>;
export declare const uiConnectionHandleSchema: z.ZodObject<{
    connectionId: z.ZodString;
    uiSessionId: z.ZodString;
    workspaceId: z.ZodLiteral<"local-workspace">;
    actor: z.ZodString;
    subject: z.ZodString;
    origin: z.ZodString;
}, z.core.$strict>;
export declare const aiRealtimeUiSessionReadySchema: z.ZodObject<{
    type: z.ZodLiteral<"ui-session-ready">;
    connectionId: z.ZodString;
}, z.core.$strict>;
export declare const aiRealtimeAcknowledgementSchema: z.ZodObject<{
    type: z.ZodLiteral<"ai-mutation-ack">;
    eventId: z.ZodString;
    receiptId: z.ZodString;
    status: z.ZodEnum<{
        applied: "applied";
        conflict: "conflict";
    }>;
}, z.core.$strict>;
export declare const aiRealtimeOpenCanvasAcknowledgementSchema: z.ZodObject<{
    type: z.ZodLiteral<"ai-open-canvas-ack">;
    requestId: z.ZodString;
    actor: z.ZodString;
    subject: z.ZodString;
    connectionId: z.ZodString;
    status: z.ZodEnum<{
        delivered: "delivered";
        deferred: "deferred";
    }>;
}, z.core.$strict>;
//# sourceMappingURL=coreSchemas.d.ts.map