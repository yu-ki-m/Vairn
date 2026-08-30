export interface McpRateLimiterClock {
    now(): number;
}
export interface McpRateLimitExceeded {
    code: 'rate_limited';
    message: 'MCP tool rate limit exceeded.';
    details: {
        scope: 'subject' | 'bucket_registry';
        retryAfterMs: number;
    };
}
export type McpRateLimitResult = {
    allowed: true;
} | {
    allowed: false;
    error: McpRateLimitExceeded;
};
export interface McpRateLimiterOptions {
    clock?: McpRateLimiterClock;
    capacity?: number;
    refillPerSecond?: number;
    idleFullMs?: number;
    maxEntries?: number;
}
export declare class McpRateLimiter {
    private readonly buckets;
    private readonly clock;
    private readonly capacity;
    private readonly refillPerSecond;
    private readonly idleFullMs;
    private readonly maxEntries;
    constructor(options?: McpRateLimiterOptions);
    consume(workspaceId: string, subject: string): McpRateLimitResult;
    size(): number;
    /** Workspace deletion must not retain a rate bucket for a deleted authority. */
    clearWorkspace(workspaceId: string): number;
    private ensureCapacity;
    private refill;
}
//# sourceMappingURL=mcpRateLimiter.d.ts.map