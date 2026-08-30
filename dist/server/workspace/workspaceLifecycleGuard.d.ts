/**
 * Coordinates destructive workspace lifecycle operations with every durable
 * write in this server process. A mutation lease covers the full read/CAS
 * sequence, not only its first availability check, so a delete cannot race a
 * save or an MCP transaction after either operation has begun.
 */
export declare class WorkspaceLifecycleGuard {
    private readonly states;
    acquireMutation(workspaceId: string): () => void;
    withMutation<T>(workspaceId: string, operation: () => Promise<T>): Promise<T>;
    deleteWorkspace<T>(workspaceId: string, operation: () => Promise<T>): Promise<T>;
    private stateFor;
    private waitForIdle;
    private removeUnusedState;
}
//# sourceMappingURL=workspaceLifecycleGuard.d.ts.map