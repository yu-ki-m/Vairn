import type { WorkspaceRole, WorkspaceSession } from '../../../shared/types/backend.js';
import type { ExternalAuthGuard } from './session.js';
/**
 * team / cloud モード（`--external-access` ＋ PostgreSQL）の認証検証を AWS Cognito 前提で行う。
 *
 * standalone モードでは使われない（createServer は Cognito 設定がある時だけ本ガードを配線する）。
 */
export interface CognitoAuthConfig {
    userPoolId: string;
    clientId: string;
    /** 検証するトークン種別。API 認可は通常 'access'。プロフィール（email/name）が要るなら 'id'。 */
    tokenUse?: 'id' | 'access';
    /** Cognito グループ名 → ワークスペースロール。未指定なら DEFAULT_GROUP_ROLE_MAP を使う。 */
    groupRoleMap?: Record<string, WorkspaceRole>;
}
/** 検証済み Cognito JWT から参照するクレーム（必要なものだけ）。 */
export interface CognitoTokenPayload {
    sub: string;
    'cognito:groups'?: string[];
    email?: string;
    name?: string;
    'cognito:username'?: string;
    username?: string;
    [claim: string]: unknown;
}
/**
 * トークン検証の差し替え口。本番は aws-jwt-verify（JWKS 署名検証）を使い、テストはスタブを注入して
 * ネットワーク/JWKS 無しで検証ロジックを確認できるようにする。
 */
export interface CognitoTokenVerifier {
    verify(token: string): Promise<CognitoTokenPayload>;
}
export declare const DEFAULT_GROUP_ROLE_MAP: Record<string, WorkspaceRole>;
/**
 * Cognito グループ集合から最も権限の高いロールを解決する。マッチが無ければ最小権限の Viewer。
 * グループ名は完全一致と小文字一致の両方を試す。
 */
export declare const resolveRoleFromGroups: (groups: readonly string[] | undefined, groupRoleMap?: Record<string, WorkspaceRole>) => WorkspaceRole;
export declare class CognitoAuthGuard implements ExternalAuthGuard {
    private readonly verifier;
    private readonly groupRoleMap;
    constructor(verifier: CognitoTokenVerifier, options?: Pick<CognitoAuthConfig, 'groupRoleMap'>);
    requireAuthenticatedSession(token?: string): Promise<WorkspaceSession>;
}
/** aws-jwt-verify を使った本番用検証器（JWKS は遅延取得・キャッシュされる）。 */
export declare const createCognitoTokenVerifier: (config: CognitoAuthConfig) => CognitoTokenVerifier;
/** 本番用 Cognito 認証ガード。createServer が team モードでのみ生成する。 */
export declare const createCognitoAuthGuard: (config: CognitoAuthConfig) => CognitoAuthGuard;
//# sourceMappingURL=cognitoAuthGuard.d.ts.map