export interface CollaborationConflict {
    conflictId: string;
    workspaceId: string;
    target: {
        type: string;
        id: string;
    };
    competingChanges: unknown[];
    createdAt: string;
    status: 'presented' | 'resolved';
}
export declare class ConflictService {
    private readonly conflicts;
    present(workspaceId: string, target: CollaborationConflict['target'], competingChanges: unknown[]): CollaborationConflict;
    list(workspaceId: string): CollaborationConflict[];
}
//# sourceMappingURL=conflictService.d.ts.map