import type { OperationStatus, OperationType } from '../../../shared/types/backend.js';
export interface OperationRecord {
    operationId: string;
    workspaceId: string;
    operationType: OperationType;
    status: OperationStatus;
    startedAt: string;
    completedAt?: string;
    cancelRequestedAt?: string;
    errorCode?: string;
    progress: number;
}
export declare class OperationRecordService {
    private readonly records;
    start(workspaceId: string, operationType: OperationType): OperationRecord;
    get(operationId: string): OperationRecord | undefined;
    setProgress(operationId: string, progress: number): OperationRecord;
    succeed(operationId: string): OperationRecord;
    fail(operationId: string, errorCode: string): OperationRecord;
    cancel(operationId: string): OperationRecord;
    supersede(operationId: string): OperationRecord;
    private require;
    private finish;
}
//# sourceMappingURL=operationRecords.d.ts.map