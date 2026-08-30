import type { WorkspaceRecoveryUnavailable } from '../../../shared/mcp/coreTypes.js';
export interface ExternalMutationRecoveryRunner {
    recoverWorkspace(workspaceId: string): Promise<unknown>;
    purgeResolved?(before: string): Promise<number>;
}
export interface AiExternalMutationCoordinatorOptions {
    retryInitialMs: number;
    retryMaxMs: number;
    retryAfterMs: number;
    alertAfterAttempts: number;
    resolvedIntentRetentionMs: number;
    now?: () => number;
    setTimeout?: (callback: () => void, delayMs: number) => ReturnType<typeof setTimeout>;
    clearTimeout?: (timer: ReturnType<typeof setTimeout>) => void;
    onAlert?: (input: {
        workspaceId: string;
        attemptCount: number;
    }) => void;
}
/**
 * The small lifecycle surface consumed by the HTTP composition root.
 *
 * Keeping this separate from the concrete recovery implementation lets the
 * server integration tests exercise the same startup and request gates with
 * a deterministic unavailable workspace.  It is deliberately server-only:
 * no request can select or replace this coordinator.
 */
export interface ExternalMutationCoordinator {
    start(workspaceId: string): Promise<void>;
    stop(): void | Promise<void>;
    unavailable(workspaceId: string): WorkspaceRecoveryUnavailable | undefined;
    recoverNow(workspaceId: string): Promise<boolean>;
}
/**
 * Keeps a workspace unavailable while an interrupted external mutation is
 * ambiguous. Recovery is retried indefinitely with a bounded exponential
 * backoff; only a successful reconciliation reopens workspace traffic.
 */
export declare class AiExternalMutationCoordinator {
    private readonly recovery;
    private readonly options;
    private readonly states;
    private readonly now;
    private readonly schedule;
    private readonly cancel;
    constructor(recovery: ExternalMutationRecoveryRunner, options: AiExternalMutationCoordinatorOptions);
    /** Completes the first recovery attempt before callers register workspace routes. */
    start(workspaceId: string): Promise<void>;
    unavailable(workspaceId: string): WorkspaceRecoveryUnavailable | undefined;
    recoverNow(workspaceId: string): Promise<boolean>;
    stop(): void;
}
//# sourceMappingURL=aiExternalMutationCoordinator.d.ts.map