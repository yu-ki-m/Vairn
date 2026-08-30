import type { WorkspaceAuditEvent } from '../../../shared/types/backend.js';
export type AuditEvent = WorkspaceAuditEvent;
export type AuditEventInput = Omit<AuditEvent, 'eventId' | 'timestamp'>;
export declare const toAuditEvent: (event: AuditEventInput) => AuditEvent;
/**
 * 監査ログの保存先。記録は best-effort（fire-and-forget）、一覧は新しい順から N 件を時系列で返す。
 * インメモリ（standalone）と PostgreSQL（team 永続）で実装を切り替える。
 */
export interface AuditStore {
    record(event: AuditEventInput): void;
    list(limit?: number): Promise<AuditEvent[]>;
}
export declare class AuditSink implements AuditStore {
    private readonly events;
    record(event: AuditEventInput): AuditEvent;
    list(limit?: number): Promise<AuditEvent[]>;
}
//# sourceMappingURL=audit.d.ts.map