import type { SessionCapacityUnavailable, UiProofResult } from '../../../shared/mcp/coreTypes.js';
export interface UiSessionProofClock {
    now(): number;
}
export interface UiSessionProofContext {
    workspaceId: 'local-workspace';
    actor: string;
    subject: string;
    origin: string;
}
/** Identity fields that remain available on same-origin safe reads without an Origin header. */
export type UiSessionProofIdentity = Omit<UiSessionProofContext, 'origin'>;
export interface UiSessionProofRecord extends UiSessionProofContext {
    proofId: string;
    csrfToken: string;
    issuedAt: number;
    lastActivityAt: number;
    /** Explicit UI input only; heartbeat/active-canvas reports never update it. */
    lastUserInteractionAt: number;
    absoluteExpiresAt: number;
}
export type UiSessionProofIssue = {
    kind: 'issued';
    proofId: string;
    result: UiProofResult;
} | {
    kind: 'capacity_unavailable';
    error: SessionCapacityUnavailable;
};
export interface UiSessionProofRegistryOptions {
    clock?: UiSessionProofClock;
    idleMs?: number;
    absoluteMs?: number;
    maxPerSubject?: number;
    maxPerProcess?: number;
    createToken?: () => string;
}
export declare const toUiProofResult: (record: UiSessionProofRecord, idleMs: number) => UiProofResult;
export declare class UiSessionProofRegistry {
    private readonly records;
    private readonly clock;
    private readonly idleMs;
    private readonly absoluteMs;
    private readonly maxPerSubject;
    private readonly maxPerProcess;
    private readonly createToken;
    constructor(options?: UiSessionProofRegistryOptions);
    issue(context: UiSessionProofContext): UiSessionProofIssue;
    get(proofId: string, context: UiSessionProofContext): UiSessionProofRecord | undefined;
    /**
     * Cookie-bound safe reads do not consistently carry Origin in browsers.  They
     * still bind to the authenticated actor/subject/workspace, while mutations
     * must use `get` with the exact Origin and CSRF token.
     */
    getForIdentity(proofId: string, identity: UiSessionProofIdentity): UiSessionProofRecord | undefined;
    refresh(proofId: string, csrfToken: string, context: UiSessionProofContext): UiProofResult | undefined;
    recordUserInteraction(proofId: string, context: UiSessionProofContext): UiSessionProofRecord | undefined;
    revoke(proofId: string, context: UiSessionProofContext): boolean;
    shutdown(): void;
    private capacityError;
    private sweep;
    private uniqueToken;
}
//# sourceMappingURL=uiSessionProof.d.ts.map