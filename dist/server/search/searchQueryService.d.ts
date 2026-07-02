import type { SearchIndexService } from './searchIndexService.js';
export interface SearchResult {
    path: string;
    name: string;
    matchKind: 'name' | 'path' | 'content';
    score: number;
}
export declare class SearchQueryService {
    private readonly indexService;
    constructor(indexService: SearchIndexService);
    query(query: string, limit?: number): SearchResult[];
    private matchEntry;
}
//# sourceMappingURL=searchQueryService.d.ts.map