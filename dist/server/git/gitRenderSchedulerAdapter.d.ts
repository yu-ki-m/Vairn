import { RenderScheduler } from '../rendering/renderScheduler.js';
import type { GitRenderResult } from './gitRenderService.js';
export declare class GitRenderSchedulerAdapter {
    private readonly scheduler;
    constructor(scheduler?: RenderScheduler<GitRenderResult>);
    schedule(workspaceId: string, sourceId: string, run: () => Promise<GitRenderResult>): import("../rendering/renderScheduler.js").ScheduledRender<GitRenderResult>;
    get(requestId: string): import("../rendering/renderScheduler.js").ScheduledRender<GitRenderResult> | undefined;
}
//# sourceMappingURL=gitRenderSchedulerAdapter.d.ts.map