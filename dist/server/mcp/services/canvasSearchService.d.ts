export interface CanvasSearchHit {
    canvasId: string;
    canvasName: string;
    nodeId: string;
    nodeType: string;
    matchedField: 'title' | 'body';
    snippet: string;
}
export interface CanvasSearchResultProjection {
    items: CanvasSearchHit[];
    truncated: boolean;
}
export declare class CanvasSearchResponseTooLargeError extends Error {
    constructor();
}
type UnknownRecord = Record<string, unknown>;
export declare const isValidCanvasSearchQuery: (query: string) => boolean;
export declare class CanvasSearchService {
    search({ document, query, canvasId, limit, responseMaxBytes }: {
        document: UnknownRecord;
        query: string;
        canvasId?: string;
        limit?: number;
        responseMaxBytes: number;
    }): CanvasSearchResultProjection | undefined;
}
export {};
//# sourceMappingURL=canvasSearchService.d.ts.map