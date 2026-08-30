import type { WorkspaceMember, WorkspaceSession } from '../../../shared/types/backend.js';
export interface RecordedMember {
    member: WorkspaceMember;
    /** このセッションで初めて記録された（新規サインイン）か。 */
    isNew: boolean;
}
/**
 * 認証済みで実際にワークスペースへ接続したユーザーの一覧。
 *
 * ロールの権限源は Cognito グループ（team モード）/ ローカルオーナー（standalone）であり、ここは
 * 「誰がアクセスしているか」を可視化する読み取り用ビュー。Cognito グループ自体の変更は AWS 側で行う。
 * インメモリ（standalone）と PostgreSQL（team 永続）で実装を切り替える。
 */
export interface MemberStore {
    record(session: WorkspaceSession): Promise<RecordedMember>;
    list(): Promise<WorkspaceMember[]>;
}
export declare class MembershipRegistry implements MemberStore {
    private readonly members;
    record(session: WorkspaceSession): Promise<RecordedMember>;
    list(): Promise<WorkspaceMember[]>;
}
//# sourceMappingURL=membershipRegistry.d.ts.map