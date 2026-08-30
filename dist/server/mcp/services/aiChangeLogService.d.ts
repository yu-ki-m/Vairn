import type { AiChangeLogQuery, AiChangeRecord } from '../../storage/StorageAdapter.js';
export interface AiChangeLogReader {
    listAiChangeRecords(input: AiChangeLogQuery): Promise<AiChangeRecord[]>;
}
export interface AiChangeLogListInput {
    workspaceId: string;
    canvasId?: string;
    from?: string;
    to?: string;
    cursor?: string;
    limit?: number;
}
export interface AiChangeRecordProjection {
    id: string;
    appliedAt: string;
    changeId: string;
    batchId: string | null;
    target: AiChangeRecord['target'];
    affectedElementIds: string[];
    summary: Array<{
        kind: string;
        count: number;
    }>;
    actor: string;
    requestedBySubject: string;
    decidedBySubject: string | null;
    basePartitionVersion: number;
    committedPartitionVersion: number;
}
export interface AiChangeLogPage {
    items: AiChangeRecordProjection[];
    nextCursor: string | null;
}
export declare class AiChangeLogError extends Error {
    readonly code: 'AI_CHANGE_LOG_INVALID' | 'PAYLOAD_TOO_LARGE';
    constructor(code: 'AI_CHANGE_LOG_INVALID' | 'PAYLOAD_TOO_LARGE', message: string);
}
/**
 * Canonical, forward-only audit projection.  The opaque cursor deliberately
 * includes every filter as well as the last descending sort key, so it cannot
 * be reused against another workspace or query shape.
 */
export declare class AiChangeLogService {
    private readonly reader;
    private readonly cursorSecret;
    constructor(reader: AiChangeLogReader, cursorSecret: string | Buffer);
    list(input: AiChangeLogListInput): Promise<AiChangeLogPage>;
    private encodeCursor;
    private decodeCursor;
}
//# sourceMappingURL=aiChangeLogService.d.ts.map