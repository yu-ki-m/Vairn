import type { AiMutationCommittedEvent } from './aiRealtimeOutboxDispatcher.js';
export interface AiRealtimeClient {
    workspaceId: string;
    /** Present only for UI-proof-bound websocket clients. */
    connectionId?: string;
    send: (payload: string) => void;
}
/** Shared websocket fan-out boundary for durable AI mutation notifications. */
export declare class AiRealtimeGateway {
    readonly clients: Set<AiRealtimeClient>;
    publishAiMutationCommitted(event: AiMutationCommittedEvent): void;
    /** Send a UI-bound request only to the server-selected realtime tab. */
    sendToConnection(connectionId: string, event: unknown): boolean;
}
//# sourceMappingURL=aiRealtimeGateway.d.ts.map