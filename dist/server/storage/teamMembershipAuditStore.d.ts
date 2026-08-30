import type { WorkspaceMember, WorkspaceSession } from '../../../shared/types/backend.js';
import { type AuditEvent, type AuditEventInput, type AuditStore } from '../workspace/audit.js';
import type { MemberStore, RecordedMember } from '../workspace/membershipRegistry.js';
/**
 * pg.Pool 互換の最小クエリ口。テストはこれをスタブして DB 無しで record/list を検証する。
 */
export interface Queryable {
    query(text: string, params?: unknown[]): Promise<{
        rows: Record<string, unknown>[];
        rowCount: number | null;
    }>;
}
/** team モード（PostgreSQL）の監査ログ永続化。記録は best-effort、一覧は新しい順 N 件を時系列で返す。 */
export declare class PostgresAuditStore implements AuditStore {
    private readonly db;
    constructor(db: Queryable);
    initialize(): Promise<void>;
    record(event: AuditEventInput): void;
    list(limit?: number): Promise<AuditEvent[]>;
}
/** team モード（PostgreSQL）のメンバー永続化。 */
export declare class PostgresMemberStore implements MemberStore {
    private readonly db;
    constructor(db: Queryable);
    initialize(): Promise<void>;
    record(session: WorkspaceSession): Promise<RecordedMember>;
    list(): Promise<WorkspaceMember[]>;
}
export interface TeamStores {
    auditStore: AuditStore;
    memberStore: MemberStore;
}
/** PostgreSQL 接続からテーブルを初期化して永続ストアを返す。 */
export declare const createTeamStores: (db: Queryable) => Promise<TeamStores>;
//# sourceMappingURL=teamMembershipAuditStore.d.ts.map