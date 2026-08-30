import type { BasicNodeType } from './basicOperationCatalog.js';
export type { BasicNodeType } from './basicOperationCatalog.js';
export interface BasicPointEndpoint {
    kind: 'point';
    x: number;
    y: number;
}
export interface BasicNodeEndpoint {
    kind: 'node';
    nodeRef: string;
    edge: 'top' | 'right' | 'bottom' | 'left';
    offsetRatio?: number;
}
export type BasicArrowEndpoint = BasicPointEndpoint | BasicNodeEndpoint;
export interface BasicTextBlockStyle {
    borderVisible?: boolean;
    borderColor?: string;
    horizontalAlign?: 'left' | 'center' | 'right';
    verticalAlign?: 'top' | 'center' | 'bottom';
    fontWeight?: 400 | 700;
}
export interface BasicTextRectangleStyle extends BasicTextBlockStyle {
    markdownView?: boolean;
    shape?: 'rectangle' | 'rounded-rectangle' | 'ellipse' | 'diamond' | 'parallelogram' | 'hexagon' | 'cylinder';
}
export interface BasicCalloutStyle extends BasicTextBlockStyle {
    calloutTailAngle?: number;
    calloutTailLength?: number;
}
export interface BasicFrameTitleVariant {
    placement?: 'outside' | 'inside';
    horizontalAlign?: 'left' | 'center' | 'right';
    verticalAlign?: 'top' | 'center' | 'bottom';
    fontWeight?: 300 | 400 | 500 | 600 | 700;
    textOpacity?: number;
    sizeRatio?: number;
}
interface BasicCreateNodeBase {
    kind: 'createNode';
    tempRef: string;
    position: {
        x: number;
        y: number;
    };
    size?: {
        width: number;
        height: number;
    };
    opacity?: number;
    rotation?: number;
}
export type BasicBatchOperation = (BasicCreateNodeBase & {
    nodeType: Extract<BasicNodeType, 'code'>;
    content?: string;
    language?: string;
    viewMode?: 'code' | 'preview';
}) | (BasicCreateNodeBase & {
    nodeType: Extract<BasicNodeType, 'rich-text'>;
    content?: string;
}) | (BasicCreateNodeBase & {
    nodeType: Extract<BasicNodeType, 'text-rectangle'>;
    content?: string;
    style?: BasicTextRectangleStyle;
}) | (BasicCreateNodeBase & {
    nodeType: Extract<BasicNodeType, 'callout'>;
    content?: string;
    style?: BasicCalloutStyle;
}) | (BasicCreateNodeBase & {
    nodeType: Extract<BasicNodeType, 'frame'>;
    title?: string;
    titleVariant?: BasicFrameTitleVariant;
}) | (BasicCreateNodeBase & {
    nodeType: Extract<BasicNodeType, 'group-frame'>;
    title?: string;
    titlePlacement?: 'top' | 'left' | 'right';
}) | (BasicCreateNodeBase & {
    nodeType: Extract<BasicNodeType, 'table'>;
}) | {
    kind: 'createArrow';
    tempRef: string;
    start: BasicArrowEndpoint;
    end: BasicArrowEndpoint;
    lineType?: 'straight' | 'elbow';
    lineStyle?: 'solid' | 'dashed' | 'dotted' | 'dash-dot';
    color?: string;
    startMarker?: 'none' | 'arrow';
    endMarker?: 'none' | 'arrow';
};
//# sourceMappingURL=basicOperationTypes.d.ts.map