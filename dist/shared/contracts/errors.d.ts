export declare const backendErrorCodes: readonly ["AUTH_REQUIRED", "CONFLICT", "INVALID_REQUEST", "INVALID_STATE", "METADATA_INIT_FAILED", "NOT_FOUND", "OPERATION_CANCELED", "PATH_OUTSIDE_ROOT", "PERMISSION_DENIED", "PORT_BIND_FAILED", "PROJECT_ROOT_UNAVAILABLE", "UNSUPPORTED_ENTRY"];
export type BackendErrorCode = (typeof backendErrorCodes)[number];
export interface BackendErrorBody {
    code: BackendErrorCode;
    message: string;
    operationId?: string;
    retryable: boolean;
}
export interface BackendErrorResponse {
    error: BackendErrorBody;
}
export interface BackendSuccessResponse<T> {
    data: T;
}
export declare const createBackendErrorResponse: (code: BackendErrorCode, message: string, retryable?: boolean, operationId?: string) => BackendErrorResponse;
//# sourceMappingURL=errors.d.ts.map