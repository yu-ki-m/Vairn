export interface PresenceSnapshot {
    sessionId: string;
    userId: string;
    activeCanvasId?: string;
    focusedObjectId?: string;
    cursor?: {
        x: number;
        y: number;
    };
    lastHeartbeatAt: string;
}
export declare class PresenceService {
    private readonly presence;
    update(snapshot: Omit<PresenceSnapshot, 'lastHeartbeatAt'>): PresenceSnapshot;
    remove(sessionId: string): void;
    snapshot(): PresenceSnapshot[];
}
//# sourceMappingURL=presenceService.d.ts.map