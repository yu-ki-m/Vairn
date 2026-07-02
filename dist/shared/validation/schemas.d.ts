import { z } from 'zod';
export declare const entityIdSchema: z.ZodString;
export declare const workspaceRoleSchema: z.ZodEnum<{
    Owner: "Owner";
    Admin: "Admin";
    Editor: "Editor";
    Viewer: "Viewer";
}>;
export declare const storageProfileSchema: z.ZodEnum<{
    "standalone-sqlite": "standalone-sqlite";
    "team-postgresql": "team-postgresql";
}>;
export declare const operationStatusSchema: z.ZodEnum<{
    queued: "queued";
    running: "running";
    succeeded: "succeeded";
    failed: "failed";
    canceled: "canceled";
    superseded: "superseded";
}>;
export declare const backendErrorCodeSchema: z.ZodEnum<{
    AUTH_REQUIRED: "AUTH_REQUIRED";
    CONFLICT: "CONFLICT";
    INVALID_REQUEST: "INVALID_REQUEST";
    INVALID_STATE: "INVALID_STATE";
    METADATA_INIT_FAILED: "METADATA_INIT_FAILED";
    NOT_FOUND: "NOT_FOUND";
    OPERATION_CANCELED: "OPERATION_CANCELED";
    PATH_OUTSIDE_ROOT: "PATH_OUTSIDE_ROOT";
    PERMISSION_DENIED: "PERMISSION_DENIED";
    PORT_BIND_FAILED: "PORT_BIND_FAILED";
    PROJECT_ROOT_UNAVAILABLE: "PROJECT_ROOT_UNAVAILABLE";
    UNSUPPORTED_ENTRY: "UNSUPPORTED_ENTRY";
}>;
export declare const backendErrorResponseSchema: z.ZodObject<{
    error: z.ZodObject<{
        code: z.ZodEnum<{
            AUTH_REQUIRED: "AUTH_REQUIRED";
            CONFLICT: "CONFLICT";
            INVALID_REQUEST: "INVALID_REQUEST";
            INVALID_STATE: "INVALID_STATE";
            METADATA_INIT_FAILED: "METADATA_INIT_FAILED";
            NOT_FOUND: "NOT_FOUND";
            OPERATION_CANCELED: "OPERATION_CANCELED";
            PATH_OUTSIDE_ROOT: "PATH_OUTSIDE_ROOT";
            PERMISSION_DENIED: "PERMISSION_DENIED";
            PORT_BIND_FAILED: "PORT_BIND_FAILED";
            PROJECT_ROOT_UNAVAILABLE: "PROJECT_ROOT_UNAVAILABLE";
            UNSUPPORTED_ENTRY: "UNSUPPORTED_ENTRY";
        }>;
        message: z.ZodString;
        operationId: z.ZodOptional<z.ZodString>;
        retryable: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const projectRelativePathSchema: z.ZodString;
export declare const nonNegativeIntegerSchema: z.ZodNumber;
//# sourceMappingURL=schemas.d.ts.map