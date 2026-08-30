export declare const MCP_READABLE_NODE_TYPES: readonly ["code", "rich-text", "text-rectangle", "callout", "frame", "group-frame", "iframe", "table", "drawio", "image", "git-diff"];
export type McpReadableNodeType = (typeof MCP_READABLE_NODE_TYPES)[number];
export type HorizontalAlign = 'left' | 'center' | 'right';
export type VerticalAlign = 'top' | 'center' | 'bottom';
export type ReadNodeBinding = {
    nodeId: string;
    edge: 'top' | 'right' | 'bottom' | 'left';
    offsetRatio: number;
};
export interface McpReadableNodeDataByType {
    code: {
        content: string;
        language: string;
        viewMode: 'code' | 'preview';
        readOnly: boolean;
        targetSourceKind: 'project-source' | 'external-library' | null;
    };
    'rich-text': {
        htmlContent: string;
    };
    'text-rectangle': {
        htmlContent: string;
        style: {
            borderVisible: boolean;
            borderColor: string | null;
            horizontalAlign: HorizontalAlign;
            verticalAlign: VerticalAlign;
            fontWeight: 400 | 700;
            markdownView: boolean;
            shape: 'rectangle' | 'rounded-rectangle' | 'ellipse' | 'diamond' | 'parallelogram' | 'hexagon' | 'cylinder';
        };
    };
    callout: {
        htmlContent: string;
        style: {
            borderVisible: boolean;
            borderColor: string | null;
            horizontalAlign: HorizontalAlign;
            verticalAlign: VerticalAlign;
            fontWeight: 400 | 700;
            calloutTailAngle: number;
            calloutTailLength: number;
            calloutTailBinding: ReadNodeBinding | null;
        };
    };
    frame: {
        title: string;
        titleVariant: {
            placement: 'outside' | 'inside';
            horizontalAlign: HorizontalAlign;
            verticalAlign: VerticalAlign;
            fontWeight: 300 | 400 | 500 | 600 | 700;
            textOpacity: number;
            sizeRatio: number;
        };
    };
    'group-frame': {
        title: string;
        titlePlacement: 'top' | 'left' | 'right';
    };
    iframe: {
        url: string;
    };
    table: {
        activeSheetId: string;
        sheets: Array<{
            sheetId: string;
            name: string;
            cells: string[][];
            columnHeaders: string[];
            columnWidths: number[];
            rowHeights: string[];
            styles: Record<string, string>;
            comments: Record<string, string>;
            mergeCells: Record<string, [number, number]>;
        }>;
    };
    drawio: {
        svg: string | null;
        aspectRatio: number | null;
    };
    image: {
        imageVariant: 'thumbnail' | 'preview' | 'original' | 'viewport' | null;
        imageStatus: 'ready' | 'missing' | 'failed' | null;
        alt: string;
        aspectRatio: number;
        crop: {
            x: number;
            y: number;
            width: number;
            height: number;
        } | null;
    };
    'git-diff': {
        diffStatus: 'ready' | 'binary' | 'too-large' | 'error';
        diffText: string | null;
    };
}
export type McpReadableNodeData = McpReadableNodeDataByType[McpReadableNodeType];
export type McpReadableNodeContent = {
    [NodeType in McpReadableNodeType]: {
        nodeId: string;
        nodeType: NodeType;
        data: McpReadableNodeDataByType[NodeType];
    };
}[McpReadableNodeType];
//# sourceMappingURL=readTypes.d.ts.map