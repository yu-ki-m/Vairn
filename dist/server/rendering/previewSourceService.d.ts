export interface PreviewSource {
    sourceId: string;
    workspaceId: string;
    content: string;
    sourceType: 'markdown' | 'asciidoc' | 'text' | 'html' | 'svg';
    contentHash: string;
    updatedAt: string;
}
export declare const hashPreviewContent: (content: string) => string;
export declare class PreviewSourceService {
    private readonly sources;
    upsert(source: Omit<PreviewSource, 'contentHash' | 'updatedAt'>): PreviewSource;
    get(sourceId: string): PreviewSource | undefined;
}
//# sourceMappingURL=previewSourceService.d.ts.map