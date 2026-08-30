import { z } from 'zod';
export declare const basicTextBlockStyleSchema: z.ZodObject<{
    borderVisible: z.ZodOptional<z.ZodBoolean>;
    borderColor: z.ZodOptional<z.ZodString>;
    horizontalAlign: z.ZodOptional<z.ZodEnum<{
        left: "left";
        center: "center";
        right: "right";
    }>>;
    verticalAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        top: "top";
        bottom: "bottom";
    }>>;
    fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<400>, z.ZodLiteral<700>]>>;
}, z.core.$strict>;
export declare const basicTextRectangleStyleSchema: z.ZodObject<{
    borderVisible: z.ZodOptional<z.ZodBoolean>;
    borderColor: z.ZodOptional<z.ZodString>;
    horizontalAlign: z.ZodOptional<z.ZodEnum<{
        left: "left";
        center: "center";
        right: "right";
    }>>;
    verticalAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        top: "top";
        bottom: "bottom";
    }>>;
    fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<400>, z.ZodLiteral<700>]>>;
    markdownView: z.ZodOptional<z.ZodBoolean>;
    shape: z.ZodOptional<z.ZodEnum<{
        rectangle: "rectangle";
        "rounded-rectangle": "rounded-rectangle";
        ellipse: "ellipse";
        diamond: "diamond";
        parallelogram: "parallelogram";
        hexagon: "hexagon";
        cylinder: "cylinder";
    }>>;
}, z.core.$strict>;
export declare const basicCalloutStyleSchema: z.ZodObject<{
    borderVisible: z.ZodOptional<z.ZodBoolean>;
    borderColor: z.ZodOptional<z.ZodString>;
    horizontalAlign: z.ZodOptional<z.ZodEnum<{
        left: "left";
        center: "center";
        right: "right";
    }>>;
    verticalAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        top: "top";
        bottom: "bottom";
    }>>;
    fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<400>, z.ZodLiteral<700>]>>;
    calloutTailAngle: z.ZodOptional<z.ZodNumber>;
    calloutTailLength: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export declare const basicFrameTitleVariantSchema: z.ZodObject<{
    placement: z.ZodOptional<z.ZodEnum<{
        outside: "outside";
        inside: "inside";
    }>>;
    horizontalAlign: z.ZodOptional<z.ZodEnum<{
        left: "left";
        center: "center";
        right: "right";
    }>>;
    verticalAlign: z.ZodOptional<z.ZodEnum<{
        center: "center";
        top: "top";
        bottom: "bottom";
    }>>;
    fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<300>, z.ZodLiteral<400>, z.ZodLiteral<500>, z.ZodLiteral<600>, z.ZodLiteral<700>]>>;
    textOpacity: z.ZodOptional<z.ZodNumber>;
    sizeRatio: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export declare const basicNodeTypeSchema: z.ZodEnum<{
    code: "code";
    "rich-text": "rich-text";
    "text-rectangle": "text-rectangle";
    callout: "callout";
    frame: "frame";
    "group-frame": "group-frame";
    table: "table";
}>;
export declare const basicArrowEndpointSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"point">;
    x: z.ZodNumber;
    y: z.ZodNumber;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"node">;
    nodeRef: z.ZodString;
    edge: z.ZodEnum<{
        left: "left";
        right: "right";
        top: "top";
        bottom: "bottom";
    }>;
    offsetRatio: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>], "kind">;
export declare const createNodeOperationSchema: z.ZodObject<{
    kind: z.ZodLiteral<"createNode">;
    tempRef: z.ZodString;
    nodeType: z.ZodEnum<{
        code: "code";
        "rich-text": "rich-text";
        "text-rectangle": "text-rectangle";
        callout: "callout";
        frame: "frame";
        "group-frame": "group-frame";
        table: "table";
    }>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
    opacity: z.ZodOptional<z.ZodNumber>;
    rotation: z.ZodOptional<z.ZodNumber>;
    content: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    viewMode: z.ZodOptional<z.ZodEnum<{
        code: "code";
        preview: "preview";
    }>>;
    style: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        borderVisible: z.ZodOptional<z.ZodBoolean>;
        borderColor: z.ZodOptional<z.ZodString>;
        horizontalAlign: z.ZodOptional<z.ZodEnum<{
            left: "left";
            center: "center";
            right: "right";
        }>>;
        verticalAlign: z.ZodOptional<z.ZodEnum<{
            center: "center";
            top: "top";
            bottom: "bottom";
        }>>;
        fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<400>, z.ZodLiteral<700>]>>;
        markdownView: z.ZodOptional<z.ZodBoolean>;
        shape: z.ZodOptional<z.ZodEnum<{
            rectangle: "rectangle";
            "rounded-rectangle": "rounded-rectangle";
            ellipse: "ellipse";
            diamond: "diamond";
            parallelogram: "parallelogram";
            hexagon: "hexagon";
            cylinder: "cylinder";
        }>>;
    }, z.core.$strict>, z.ZodObject<{
        borderVisible: z.ZodOptional<z.ZodBoolean>;
        borderColor: z.ZodOptional<z.ZodString>;
        horizontalAlign: z.ZodOptional<z.ZodEnum<{
            left: "left";
            center: "center";
            right: "right";
        }>>;
        verticalAlign: z.ZodOptional<z.ZodEnum<{
            center: "center";
            top: "top";
            bottom: "bottom";
        }>>;
        fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<400>, z.ZodLiteral<700>]>>;
        calloutTailAngle: z.ZodOptional<z.ZodNumber>;
        calloutTailLength: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>]>>;
    titleVariant: z.ZodOptional<z.ZodObject<{
        placement: z.ZodOptional<z.ZodEnum<{
            outside: "outside";
            inside: "inside";
        }>>;
        horizontalAlign: z.ZodOptional<z.ZodEnum<{
            left: "left";
            center: "center";
            right: "right";
        }>>;
        verticalAlign: z.ZodOptional<z.ZodEnum<{
            center: "center";
            top: "top";
            bottom: "bottom";
        }>>;
        fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<300>, z.ZodLiteral<400>, z.ZodLiteral<500>, z.ZodLiteral<600>, z.ZodLiteral<700>]>>;
        textOpacity: z.ZodOptional<z.ZodNumber>;
        sizeRatio: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    titlePlacement: z.ZodOptional<z.ZodEnum<{
        left: "left";
        right: "right";
        top: "top";
    }>>;
}, z.core.$strict>;
export declare const createArrowOperationSchema: z.ZodObject<{
    kind: z.ZodLiteral<"createArrow">;
    tempRef: z.ZodString;
    start: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"point">;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"node">;
        nodeRef: z.ZodString;
        edge: z.ZodEnum<{
            left: "left";
            right: "right";
            top: "top";
            bottom: "bottom";
        }>;
        offsetRatio: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>], "kind">;
    end: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"point">;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"node">;
        nodeRef: z.ZodString;
        edge: z.ZodEnum<{
            left: "left";
            right: "right";
            top: "top";
            bottom: "bottom";
        }>;
        offsetRatio: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>], "kind">;
    lineType: z.ZodOptional<z.ZodEnum<{
        straight: "straight";
        elbow: "elbow";
    }>>;
    lineStyle: z.ZodOptional<z.ZodEnum<{
        solid: "solid";
        dashed: "dashed";
        dotted: "dotted";
        "dash-dot": "dash-dot";
    }>>;
    color: z.ZodOptional<z.ZodString>;
    startMarker: z.ZodOptional<z.ZodEnum<{
        arrow: "arrow";
        none: "none";
    }>>;
    endMarker: z.ZodOptional<z.ZodEnum<{
        arrow: "arrow";
        none: "none";
    }>>;
}, z.core.$strict>;
export declare const basicBatchOperationSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"createNode">;
    tempRef: z.ZodString;
    nodeType: z.ZodEnum<{
        code: "code";
        "rich-text": "rich-text";
        "text-rectangle": "text-rectangle";
        callout: "callout";
        frame: "frame";
        "group-frame": "group-frame";
        table: "table";
    }>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
    opacity: z.ZodOptional<z.ZodNumber>;
    rotation: z.ZodOptional<z.ZodNumber>;
    content: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    viewMode: z.ZodOptional<z.ZodEnum<{
        code: "code";
        preview: "preview";
    }>>;
    style: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        borderVisible: z.ZodOptional<z.ZodBoolean>;
        borderColor: z.ZodOptional<z.ZodString>;
        horizontalAlign: z.ZodOptional<z.ZodEnum<{
            left: "left";
            center: "center";
            right: "right";
        }>>;
        verticalAlign: z.ZodOptional<z.ZodEnum<{
            center: "center";
            top: "top";
            bottom: "bottom";
        }>>;
        fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<400>, z.ZodLiteral<700>]>>;
        markdownView: z.ZodOptional<z.ZodBoolean>;
        shape: z.ZodOptional<z.ZodEnum<{
            rectangle: "rectangle";
            "rounded-rectangle": "rounded-rectangle";
            ellipse: "ellipse";
            diamond: "diamond";
            parallelogram: "parallelogram";
            hexagon: "hexagon";
            cylinder: "cylinder";
        }>>;
    }, z.core.$strict>, z.ZodObject<{
        borderVisible: z.ZodOptional<z.ZodBoolean>;
        borderColor: z.ZodOptional<z.ZodString>;
        horizontalAlign: z.ZodOptional<z.ZodEnum<{
            left: "left";
            center: "center";
            right: "right";
        }>>;
        verticalAlign: z.ZodOptional<z.ZodEnum<{
            center: "center";
            top: "top";
            bottom: "bottom";
        }>>;
        fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<400>, z.ZodLiteral<700>]>>;
        calloutTailAngle: z.ZodOptional<z.ZodNumber>;
        calloutTailLength: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>]>>;
    titleVariant: z.ZodOptional<z.ZodObject<{
        placement: z.ZodOptional<z.ZodEnum<{
            outside: "outside";
            inside: "inside";
        }>>;
        horizontalAlign: z.ZodOptional<z.ZodEnum<{
            left: "left";
            center: "center";
            right: "right";
        }>>;
        verticalAlign: z.ZodOptional<z.ZodEnum<{
            center: "center";
            top: "top";
            bottom: "bottom";
        }>>;
        fontWeight: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<300>, z.ZodLiteral<400>, z.ZodLiteral<500>, z.ZodLiteral<600>, z.ZodLiteral<700>]>>;
        textOpacity: z.ZodOptional<z.ZodNumber>;
        sizeRatio: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
    titlePlacement: z.ZodOptional<z.ZodEnum<{
        left: "left";
        right: "right";
        top: "top";
    }>>;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"createArrow">;
    tempRef: z.ZodString;
    start: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"point">;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"node">;
        nodeRef: z.ZodString;
        edge: z.ZodEnum<{
            left: "left";
            right: "right";
            top: "top";
            bottom: "bottom";
        }>;
        offsetRatio: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>], "kind">;
    end: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"point">;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"node">;
        nodeRef: z.ZodString;
        edge: z.ZodEnum<{
            left: "left";
            right: "right";
            top: "top";
            bottom: "bottom";
        }>;
        offsetRatio: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>], "kind">;
    lineType: z.ZodOptional<z.ZodEnum<{
        straight: "straight";
        elbow: "elbow";
    }>>;
    lineStyle: z.ZodOptional<z.ZodEnum<{
        solid: "solid";
        dashed: "dashed";
        dotted: "dotted";
        "dash-dot": "dash-dot";
    }>>;
    color: z.ZodOptional<z.ZodString>;
    startMarker: z.ZodOptional<z.ZodEnum<{
        arrow: "arrow";
        none: "none";
    }>>;
    endMarker: z.ZodOptional<z.ZodEnum<{
        arrow: "arrow";
        none: "none";
    }>>;
}, z.core.$strict>], "kind">;
//# sourceMappingURL=basicOperationSchemas.d.ts.map