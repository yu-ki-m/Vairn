import type { GitHistoryRow } from './gitRenderSourceService.js';
export interface GitRenderResult {
    gitRenderId: string;
    outputKind: 'html';
    htmlPayload: string;
    status: 'ready';
    createdAt: string;
}
export declare class GitRenderService {
    renderHistory(rows: GitHistoryRow[]): GitRenderResult;
    renderDiff(diff: string): GitRenderResult;
    private result;
}
//# sourceMappingURL=gitRenderService.d.ts.map