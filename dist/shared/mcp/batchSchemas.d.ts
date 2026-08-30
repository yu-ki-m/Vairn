import { z } from 'zod';
export declare const genericNodeChangesSchema: z.ZodObject<{
    position: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>>;
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
export declare const genericArrowChangesSchema: z.ZodObject<{
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
    bendPoints: z.ZodOptional<z.ZodArray<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export declare const genericBatchOperationSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"updateNode">;
    nodeRef: z.ZodString;
    changes: z.ZodObject<{
        position: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>>;
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
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"deleteNode">;
    nodeRef: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"updateArrow">;
    arrowRef: z.ZodString;
    changes: z.ZodObject<{
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
        bendPoints: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"deleteArrow">;
    arrowRef: z.ZodString;
}, z.core.$strict>], "kind">;
export declare const batchOperationSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"updateNode">;
    nodeRef: z.ZodString;
    changes: z.ZodObject<{
        position: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>>;
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
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"deleteNode">;
    nodeRef: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"updateArrow">;
    arrowRef: z.ZodString;
    changes: z.ZodObject<{
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
        bendPoints: z.ZodOptional<z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"deleteArrow">;
    arrowRef: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
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
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"createLinkedFileNode">;
    tempRef: z.ZodString;
    linkedType: z.ZodEnum<{
        code: "code";
        drawio: "drawio";
        "markdown-preview": "markdown-preview";
    }>;
    path: z.ZodString;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
    lineRange: z.ZodOptional<z.ZodObject<{
        startLine: z.ZodNumber;
        endLine: z.ZodNumber;
    }, z.core.$strict>>;
    pageId: z.ZodOptional<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"createGitDiffNode">;
    tempRef: z.ZodString;
    commitOid: z.ZodString;
    filePath: z.ZodString;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"createImageNode">;
    tempRef: z.ZodString;
    projectPath: z.ZodString;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
    alt: z.ZodOptional<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"createView">;
    tempRef: z.ZodString;
    name: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"createGroup">;
    tempRef: z.ZodString;
    viewRef: z.ZodString;
    name: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"renameView">;
    viewRef: z.ZodString;
    name: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"renameGroup">;
    viewRef: z.ZodString;
    groupRef: z.ZodString;
    name: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"assignObjectsToGroup">;
    viewRef: z.ZodString;
    groupRef: z.ZodString;
    objectRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"deleteGroup">;
    viewRef: z.ZodString;
    groupRef: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"deleteView">;
    viewRef: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"createLayer">;
    tempRef: z.ZodString;
    name: z.ZodString;
    objectRefs: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"renameLayer">;
    layerRef: z.ZodString;
    name: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"assignObjectsToLayer">;
    layerRef: z.ZodString;
    objectRefs: z.ZodArray<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"deleteLayer">;
    layerRef: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"reorderLayer">;
    layerRef: z.ZodString;
    position: z.ZodUnion<readonly [z.ZodLiteral<"front">, z.ZodLiteral<"back">, z.ZodObject<{
        before: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        after: z.ZodString;
    }, z.core.$strict>]>;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"moveLayerObject">;
    layerRef: z.ZodString;
    objectRef: z.ZodString;
    position: z.ZodEnum<{
        front: "front";
        back: "back";
        before: "before";
        after: "after";
    }>;
    relativeObjectRef: z.ZodOptional<z.ZodString>;
}, z.core.$strict>], "kind">;
export declare const utf8ByteLength: (value: string) => number;
export declare const jsonUtf8ByteLength: (value: unknown) => number;
export declare const batchEditRequestSchema: z.ZodObject<{
    canvasId: z.ZodString;
    expectedRevision: z.ZodNumber;
    operations: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"updateNode">;
        nodeRef: z.ZodString;
        changes: z.ZodObject<{
            position: z.ZodOptional<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strict>>;
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
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"deleteNode">;
        nodeRef: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"updateArrow">;
        arrowRef: z.ZodString;
        changes: z.ZodObject<{
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
            bendPoints: z.ZodOptional<z.ZodArray<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strict>>>;
        }, z.core.$strict>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"deleteArrow">;
        arrowRef: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
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
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"createLinkedFileNode">;
        tempRef: z.ZodString;
        linkedType: z.ZodEnum<{
            code: "code";
            drawio: "drawio";
            "markdown-preview": "markdown-preview";
        }>;
        path: z.ZodString;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>;
        size: z.ZodOptional<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, z.core.$strict>>;
        lineRange: z.ZodOptional<z.ZodObject<{
            startLine: z.ZodNumber;
            endLine: z.ZodNumber;
        }, z.core.$strict>>;
        pageId: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"createGitDiffNode">;
        tempRef: z.ZodString;
        commitOid: z.ZodString;
        filePath: z.ZodString;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>;
        size: z.ZodOptional<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"createImageNode">;
        tempRef: z.ZodString;
        projectPath: z.ZodString;
        position: z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>;
        size: z.ZodOptional<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, z.core.$strict>>;
        alt: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"createView">;
        tempRef: z.ZodString;
        name: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"createGroup">;
        tempRef: z.ZodString;
        viewRef: z.ZodString;
        name: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"renameView">;
        viewRef: z.ZodString;
        name: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"renameGroup">;
        viewRef: z.ZodString;
        groupRef: z.ZodString;
        name: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"assignObjectsToGroup">;
        viewRef: z.ZodString;
        groupRef: z.ZodString;
        objectRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"deleteGroup">;
        viewRef: z.ZodString;
        groupRef: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"deleteView">;
        viewRef: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"createLayer">;
        tempRef: z.ZodString;
        name: z.ZodString;
        objectRefs: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"renameLayer">;
        layerRef: z.ZodString;
        name: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"assignObjectsToLayer">;
        layerRef: z.ZodString;
        objectRefs: z.ZodArray<z.ZodString>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"deleteLayer">;
        layerRef: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"reorderLayer">;
        layerRef: z.ZodString;
        position: z.ZodUnion<readonly [z.ZodLiteral<"front">, z.ZodLiteral<"back">, z.ZodObject<{
            before: z.ZodString;
        }, z.core.$strict>, z.ZodObject<{
            after: z.ZodString;
        }, z.core.$strict>]>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"moveLayerObject">;
        layerRef: z.ZodString;
        objectRef: z.ZodString;
        position: z.ZodEnum<{
            front: "front";
            back: "back";
            before: "before";
            after: "after";
        }>;
        relativeObjectRef: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>], "kind">>;
}, z.core.$strict>;
export declare const batchEditAppliedResultSchema: z.ZodObject<{
    status: z.ZodLiteral<"applied">;
    batchId: z.ZodString;
    newRevision: z.ZodNumber;
    idMap: z.ZodRecord<z.ZodString, z.ZodString>;
    receiptId: z.ZodString;
}, z.core.$strict>;
export declare const batchEditPendingConfirmationResultSchema: z.ZodObject<{
    status: z.ZodLiteral<"pending_confirmation">;
    pendingId: z.ZodString;
    batchId: z.ZodString;
}, z.core.$strict>;
export declare const batchEditResultSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    status: z.ZodLiteral<"applied">;
    batchId: z.ZodString;
    newRevision: z.ZodNumber;
    idMap: z.ZodRecord<z.ZodString, z.ZodString>;
    receiptId: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    status: z.ZodLiteral<"pending_confirmation">;
    pendingId: z.ZodString;
    batchId: z.ZodString;
}, z.core.$strict>], "status">;
//# sourceMappingURL=batchSchemas.d.ts.map