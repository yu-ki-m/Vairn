export type CanonicalNodeSizeKind = 'code' | 'rich-text' | 'text-rectangle' | 'callout' | 'frame' | 'group-frame' | 'iframe' | 'table' | 'drawio' | 'image' | 'git-diff';
export interface CanonicalNodeSize {
    width: number;
    height: number;
}
export interface CanonicalNodeSizeContract {
    defaultSize: CanonicalNodeSize;
    minimumSize: CanonicalNodeSize;
}
/** Maximum display footprint used by every image creation surface. */
export declare const CANONICAL_IMAGE_MAX_SIZE: Readonly<CanonicalNodeSize>;
/** One numeric source of truth for the browser palette and MCP layout service. */
export declare const CANONICAL_NODE_SIZE_CONTRACTS: Readonly<Record<CanonicalNodeSizeKind, CanonicalNodeSizeContract>>;
/**
 * Pure shared image sizing rule for palette drops, pasted images, and MCP
 * image nodes. It preserves aspect ratio and keeps small images usable.
 */
export declare const resolveCanonicalInitialImageSize: (width: number, height: number) => CanonicalNodeSize;
//# sourceMappingURL=nodeSizeContracts.d.ts.map