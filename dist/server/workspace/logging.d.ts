import type { FastifyRequest } from 'fastify';
import type { WorkspaceSession } from '../../../shared/types/backend.js';
export type BackendLogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error';
export interface ErrorDiagnostic {
    name?: string;
    code?: string;
    message: string;
    stack?: string;
    cause?: ErrorDiagnostic;
    retryable?: boolean;
}
export interface BackendLogEvent {
    timestamp?: string;
    level: BackendLogLevel;
    eventName: string;
    component: string;
    requestId?: string;
    operationId?: string;
    connectionId?: string;
    phase?: string;
    route?: string;
    method?: string;
    statusCode?: number;
    durationMs?: number;
    remoteAddress?: string;
    actor?: Record<string, unknown>;
    target?: Record<string, unknown>;
    metrics?: Record<string, unknown>;
    error?: ErrorDiagnostic;
    metadata?: Record<string, unknown>;
}
export interface BackendLogError {
    message: string;
    code?: string;
    stack?: string;
    metadata?: Record<string, unknown>;
}
export interface RequestTraceContext {
    requestId: string;
    route: string;
    method: string;
    startedAt: number;
}
export interface BackendLoggerOptions {
    level?: BackendLogLevel;
    maxBytes?: number;
    maxFiles?: number;
}
interface OperationTraceOptions {
    component: string;
    eventName: string;
    phase?: string;
    operationId?: string;
    target?: Record<string, unknown>;
    metrics?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
}
interface OperationFinishOptions {
    eventName?: string;
    phase?: string;
    target?: Record<string, unknown>;
    metrics?: Record<string, unknown>;
    metadata?: Record<string, unknown>;
}
declare module 'fastify' {
    interface FastifyInstance {
        backendLogger?: BackendLogger;
    }
    interface FastifyRequest {
        traceContext?: RequestTraceContext;
    }
}
export declare function resolveBackendLogLevel(value: unknown): BackendLogLevel;
export declare function createRequestId(value: unknown): string;
export declare function createOperationId(prefix?: string): string;
export declare function durationSince(startedAt: number): number;
export declare function redactLogValue(value: unknown, key?: string, seen?: WeakSet<object>): unknown;
export declare function errorToDiagnostic(error: unknown, depth?: number): ErrorDiagnostic;
export declare function summarizeWorkspacePayload(payload: unknown): Record<string, unknown>;
export declare function summarizeActor(session: WorkspaceSession | undefined, authRequired: boolean, externalAccess: boolean): Record<string, unknown>;
export declare function requestRoute(request: FastifyRequest): string;
export declare function getRequestId(request: FastifyRequest): string | undefined;
export declare class BackendLogger {
    private readonly logsDir;
    readonly logPaths: {
        backend: string;
        errors: string;
        debug: string;
    };
    private readonly level;
    private readonly maxBytes;
    private readonly maxFiles;
    constructor(logsDir: string, options?: BackendLoggerOptions);
    event(event: BackendLogEvent): void;
    error(error: BackendLogError): void;
    private shouldLog;
    private append;
    private rotateIfNeeded;
}
export declare function startBackendOperation(logger: BackendLogger | undefined, trace: RequestTraceContext | undefined, options: OperationTraceOptions): {
    operationId: string;
    finish: (finishOptions?: OperationFinishOptions) => void;
    fail: (error: unknown, failOptions?: OperationFinishOptions) => void;
};
export declare function runLoggedOperation<T>(logger: BackendLogger | undefined, trace: RequestTraceContext | undefined, options: OperationTraceOptions, run: () => Promise<T>, summarizeResult?: (result: T) => OperationFinishOptions): Promise<T>;
export {};
//# sourceMappingURL=logging.d.ts.map