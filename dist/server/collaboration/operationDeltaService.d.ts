import { EventEmitter } from 'node:events';
export interface OperationDelta {
    deltaId: string;
    workspaceId: string;
    sessionId: string;
    target: {
        type: string;
        id: string;
    };
    kind: string;
    baseVersion?: number;
    payload: Record<string, unknown>;
    clientTime?: string;
    serverTime?: string;
}
export interface AcceptedDelta extends OperationDelta {
    serverTime: string;
    coalescedFrom: string[];
}
export declare class OperationDeltaService extends EventEmitter {
    private readonly latestByTarget;
    accept(delta: OperationDelta): AcceptedDelta;
    getLatest(workspaceId: string): AcceptedDelta[];
}
//# sourceMappingURL=operationDeltaService.d.ts.map