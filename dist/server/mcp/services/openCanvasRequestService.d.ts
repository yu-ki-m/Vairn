export type OpenCanvasStatus = 'delivered' | 'deferred' | 'no_ui_session';
export interface OpenCanvasResult {
    status: OpenCanvasStatus;
    canvasId: string;
    requestId: string;
}
export interface OpenCanvasConnection {
    workspaceId: 'local-workspace';
    actor: string;
    subject: string;
    connectionId: string;
}
export interface OpenCanvasRequestEvent extends Pick<OpenCanvasConnection, 'workspaceId'> {
    type: 'ai-open-canvas-request';
    requestId: string;
    canvasId: string;
    actor: string;
    subject: string;
    connectionId: string;
}
export interface OpenCanvasAcknowledgement extends OpenCanvasConnection {
    requestId: string;
    status: 'delivered' | 'deferred';
}
export interface OpenCanvasRequestServiceOptions {
    selectActive: (workspaceId: 'local-workspace', subject: string, actor: string) => OpenCanvasConnection | undefined;
    send: (connectionId: string, event: OpenCanvasRequestEvent) => void;
    clock?: {
        now(): number;
    };
    createId?: () => string;
    acknowledgementTimeoutMs?: number;
    deferredTtlMs?: number;
}
/**
 * Correlates a single MCP `open_canvas` request to the selected UI tab.  No
 * request can be acknowledged by another actor, subject, workspace, tab, or
 * a second ACK after it has settled.
 */
export declare class OpenCanvasRequestService {
    private readonly options;
    private readonly pending;
    private readonly clock;
    private readonly createId;
    private readonly acknowledgementTimeoutMs;
    private readonly deferredTtlMs;
    private readonly deferred;
    constructor(options: OpenCanvasRequestServiceOptions);
    request(input: Omit<OpenCanvasRequestEvent, 'type' | 'requestId' | 'connectionId'>): Promise<OpenCanvasResult>;
    ack(acknowledgement: OpenCanvasAcknowledgement): boolean;
    /** Allows deterministic fake-clock tests and process lifecycle cleanup. */
    sweep(): void;
    close(connectionId: string): void;
    shutdown(): void;
    /** UI uses this to discard an edit-mode-deferred request at the same TTL. */
    isDeferredRequestActive(requestId: string): boolean;
    private timeout;
    private settle;
}
//# sourceMappingURL=openCanvasRequestService.d.ts.map