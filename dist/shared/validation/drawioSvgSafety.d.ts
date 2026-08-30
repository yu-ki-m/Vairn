/**
 * Rejects references that make an exported SVG execute code or fetch another
 * resource. Plain anchor navigation is not a fetch and is retained so drawio's
 * own SVG text fallback and user-authored links remain valid.
 */
export declare function hasUnsafeDrawioSvgReference(svg: string): boolean;
//# sourceMappingURL=drawioSvgSafety.d.ts.map