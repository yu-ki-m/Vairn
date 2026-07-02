export interface RenderRequest<T = unknown> {
    requestId?: string;
    workspaceId: string;
    sourceId: string;
    priority: 'visible' | 'active' | 'normal' | 'hidden';
    run: () => Promise<T>;
}
export interface ScheduledRender<T = unknown> {
    requestId: string;
    status: 'queued' | 'running' | 'ready' | 'failed' | 'canceled';
    result?: T;
    error?: string;
}
export declare class RenderScheduler<T = unknown> {
    private readonly concurrency;
    private readonly queue;
    private readonly states;
    private running;
    constructor(concurrency?: number);
    schedule(request: RenderRequest<T>): ScheduledRender<T>;
    cancel(requestId: string): ScheduledRender<T> | undefined;
    get(requestId: string): ScheduledRender<T> | undefined;
    private pump;
}
//# sourceMappingURL=renderScheduler.d.ts.map