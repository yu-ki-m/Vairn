import type { AiRealtimeOutboxRecord } from '../storage/StorageAdapter.js';
export interface AiMutationCommittedEvent {
    type: 'ai-mutation-committed';
    workspaceId: string;
    receiptId: string;
    receiptSequence: number;
}
export interface AiRealtimeOutboxStore {
    claimDueAiRealtimeOutbox(input: {
        now: string;
        leaseUntil: string;
        limit: number;
    }): Promise<AiRealtimeOutboxRecord[]>;
    markAiRealtimeOutboxPublished(input: {
        eventId: string;
        claimedNextAttemptAt: string;
        publishedAt: string;
        purgeAfter: string;
    }): Promise<boolean>;
    rescheduleAiRealtimeOutbox(input: {
        eventId: string;
        claimedNextAttemptAt: string;
        attemptCount: number;
        nextAttemptAt: string;
    }): Promise<boolean>;
    purgeExpiredAiMutationData(input: {
        workspaceId: string;
        now: string;
    }): Promise<unknown>;
}
export interface AiRealtimeOutboxDispatcherOptions {
    clock?: () => Date;
    retryInitialMs?: number;
    retryMaxMs?: number;
    publishedRetentionMs?: number;
    alertAfterAttempts?: number;
    batchSize?: number;
    pollIntervalMs?: number;
    onAlert?: (alert: {
        eventId: string;
        workspaceId: string;
        attemptCount: number;
    }) => void;
    onError?: (error: unknown) => void;
}
/**
 * At-least-once durable outbox delivery. A claim leases a pending record
 * before publishing; both success and retry transitions compare that lease so
 * another process cannot overwrite a newer attempt.
 */
export declare class AiRealtimeOutboxDispatcher {
    private readonly store;
    private readonly publish;
    private readonly options;
    private readonly clock;
    private readonly retryInitialMs;
    private readonly retryMaxMs;
    private readonly publishedRetentionMs;
    private readonly alertAfterAttempts;
    private readonly batchSize;
    private readonly pollIntervalMs;
    private interval?;
    private running?;
    constructor(store: AiRealtimeOutboxStore, publish: (event: AiMutationCommittedEvent) => Promise<void> | void, options?: AiRealtimeOutboxDispatcherOptions);
    start(): void;
    stop(): Promise<void>;
    dispatchDue(): Promise<number>;
    private dispatchOnce;
}
//# sourceMappingURL=aiRealtimeOutboxDispatcher.d.ts.map