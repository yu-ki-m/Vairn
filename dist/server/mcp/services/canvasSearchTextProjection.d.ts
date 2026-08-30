export interface SearchTextProjection {
    title: string | null;
    body: string | null;
}
export interface SearchTextMatch {
    /** Unicode code-point offsets into the original source. */
    start: number;
    end: number;
}
type UnknownRecord = Record<string, unknown>;
export declare const normalizePlainWhitespace: (value: string) => string;
/** Converts the editor's stored HTML/SVG text into a safe, searchable value. */
export declare const htmlPlainText: (value: unknown) => string | null;
/** The single canonical title/body projection used by structure reads and MCP search. */
export declare const projectCanvasNodeSearchText: (node: UnknownRecord, linkedDrawioFiles: UnknownRecord) => SearchTextProjection;
export declare const foldSearchText: (value: string) => string;
/** Finds the first locale-independent folded match and maps it back to source code points. */
export declare const findCaseInsensitiveMatch: (source: string, query: string) => SearchTextMatch | undefined;
/** Builds a 512-code-point maximum source-casing snippet with deterministic context allocation. */
export declare const createSearchSnippet: (source: string, match: SearchTextMatch) => string;
export {};
//# sourceMappingURL=canvasSearchTextProjection.d.ts.map