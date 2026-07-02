import { EventEmitter } from 'node:events';
export type ProjectRootWatcherStatus = 'watching' | 'degraded' | 'stopped';
export interface ProjectRootChange {
    type: 'add' | 'change' | 'unlink' | 'addDir' | 'unlinkDir' | 'refresh';
    path: string;
}
export declare class ProjectRootWatcher extends EventEmitter {
    private readonly projectRoot;
    private watcher?;
    status: ProjectRootWatcherStatus;
    constructor(projectRoot: string);
    start(): void;
    manualRefresh(path?: string): ProjectRootChange;
    stop(): Promise<void>;
}
//# sourceMappingURL=projectRootWatcher.d.ts.map