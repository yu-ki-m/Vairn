import { z } from 'zod';
export declare const ReadNodeBindingSchema: z.ZodObject<{
    nodeId: z.ZodString;
    edge: z.ZodEnum<{
        left: "left";
        right: "right";
        top: "top";
        bottom: "bottom";
    }>;
    offsetRatio: z.ZodNumber;
}, z.core.$strict>;
/** Exact allowlist for publicly readable node data; transient/editor fields never validate. */
export declare const McpReadableNodeDataSchema: z.ZodUnion<readonly [z.ZodObject<{
    content: z.ZodString;
    language: z.ZodString;
    viewMode: z.ZodEnum<{
        code: "code";
        preview: "preview";
    }>;
    readOnly: z.ZodBoolean;
    targetSourceKind: z.ZodNullable<z.ZodEnum<{
        "project-source": "project-source";
        "external-library": "external-library";
    }>>;
}, z.core.$strict>, z.ZodObject<{
    htmlContent: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    htmlContent: z.ZodString;
    style: z.ZodObject<{
        borderVisible: z.ZodBoolean;
        borderColor: z.ZodNullable<z.ZodString>;
        horizontalAlign: z.ZodEnum<{
            left: "left";
            center: "center";
            right: "right";
        }>;
        verticalAlign: z.ZodEnum<{
            center: "center";
            top: "top";
            bottom: "bottom";
        }>;
        fontWeight: z.ZodUnion<readonly [z.ZodLiteral<400>, z.ZodLiteral<700>]>;
        markdownView: z.ZodBoolean;
        shape: z.ZodEnum<{
            rectangle: "rectangle";
            "rounded-rectangle": "rounded-rectangle";
            ellipse: "ellipse";
            diamond: "diamond";
            parallelogram: "parallelogram";
            hexagon: "hexagon";
            cylinder: "cylinder";
        }>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    htmlContent: z.ZodString;
    style: z.ZodObject<{
        borderVisible: z.ZodBoolean;
        borderColor: z.ZodNullable<z.ZodString>;
        horizontalAlign: z.ZodEnum<{
            left: "left";
            center: "center";
            right: "right";
        }>;
        verticalAlign: z.ZodEnum<{
            center: "center";
            top: "top";
            bottom: "bottom";
        }>;
        fontWeight: z.ZodUnion<readonly [z.ZodLiteral<400>, z.ZodLiteral<700>]>;
        calloutTailAngle: z.ZodNumber;
        calloutTailLength: z.ZodNumber;
        calloutTailBinding: z.ZodNullable<z.ZodObject<{
            nodeId: z.ZodString;
            edge: z.ZodEnum<{
                left: "left";
                right: "right";
                top: "top";
                bottom: "bottom";
            }>;
            offsetRatio: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    title: z.ZodString;
    titleVariant: z.ZodObject<{
        placement: z.ZodEnum<{
            outside: "outside";
            inside: "inside";
        }>;
        horizontalAlign: z.ZodEnum<{
            left: "left";
            center: "center";
            right: "right";
        }>;
        verticalAlign: z.ZodEnum<{
            center: "center";
            top: "top";
            bottom: "bottom";
        }>;
        fontWeight: z.ZodUnion<readonly [z.ZodLiteral<300>, z.ZodLiteral<400>, z.ZodLiteral<500>, z.ZodLiteral<600>, z.ZodLiteral<700>]>;
        textOpacity: z.ZodNumber;
        sizeRatio: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    title: z.ZodString;
    titlePlacement: z.ZodEnum<{
        left: "left";
        right: "right";
        top: "top";
    }>;
}, z.core.$strict>, z.ZodObject<{
    url: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    activeSheetId: z.ZodString;
    sheets: z.ZodArray<z.ZodObject<{
        sheetId: z.ZodString;
        name: z.ZodString;
        cells: z.ZodArray<z.ZodArray<z.ZodString>>;
        columnHeaders: z.ZodArray<z.ZodString>;
        columnWidths: z.ZodArray<z.ZodNumber>;
        rowHeights: z.ZodArray<z.ZodString>;
        styles: z.ZodRecord<z.ZodString, z.ZodString>;
        comments: z.ZodRecord<z.ZodString, z.ZodString>;
        mergeCells: z.ZodRecord<z.ZodString, z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    svg: z.ZodNullable<z.ZodString>;
    aspectRatio: z.ZodNullable<z.ZodNumber>;
}, z.core.$strict>, z.ZodObject<{
    imageVariant: z.ZodNullable<z.ZodEnum<{
        preview: "preview";
        thumbnail: "thumbnail";
        original: "original";
        viewport: "viewport";
    }>>;
    imageStatus: z.ZodNullable<z.ZodEnum<{
        ready: "ready";
        missing: "missing";
        failed: "failed";
    }>>;
    alt: z.ZodString;
    aspectRatio: z.ZodNumber;
    crop: z.ZodNullable<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    diffStatus: z.ZodEnum<{
        error: "error";
        ready: "ready";
        binary: "binary";
        "too-large": "too-large";
    }>;
    diffText: z.ZodNullable<z.ZodString>;
}, z.core.$strict>]>;
export declare const McpReadableNodeContentSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodLiteral<"code">;
    data: z.ZodObject<{
        content: z.ZodString;
        language: z.ZodString;
        viewMode: z.ZodEnum<{
            code: "code";
            preview: "preview";
        }>;
        readOnly: z.ZodBoolean;
        targetSourceKind: z.ZodNullable<z.ZodEnum<{
            "project-source": "project-source";
            "external-library": "external-library";
        }>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodLiteral<"rich-text">;
    data: z.ZodObject<{
        htmlContent: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodLiteral<"text-rectangle">;
    data: z.ZodObject<{
        htmlContent: z.ZodString;
        style: z.ZodObject<{
            borderVisible: z.ZodBoolean;
            borderColor: z.ZodNullable<z.ZodString>;
            horizontalAlign: z.ZodEnum<{
                left: "left";
                center: "center";
                right: "right";
            }>;
            verticalAlign: z.ZodEnum<{
                center: "center";
                top: "top";
                bottom: "bottom";
            }>;
            fontWeight: z.ZodUnion<readonly [z.ZodLiteral<400>, z.ZodLiteral<700>]>;
            markdownView: z.ZodBoolean;
            shape: z.ZodEnum<{
                rectangle: "rectangle";
                "rounded-rectangle": "rounded-rectangle";
                ellipse: "ellipse";
                diamond: "diamond";
                parallelogram: "parallelogram";
                hexagon: "hexagon";
                cylinder: "cylinder";
            }>;
        }, z.core.$strict>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodLiteral<"callout">;
    data: z.ZodObject<{
        htmlContent: z.ZodString;
        style: z.ZodObject<{
            borderVisible: z.ZodBoolean;
            borderColor: z.ZodNullable<z.ZodString>;
            horizontalAlign: z.ZodEnum<{
                left: "left";
                center: "center";
                right: "right";
            }>;
            verticalAlign: z.ZodEnum<{
                center: "center";
                top: "top";
                bottom: "bottom";
            }>;
            fontWeight: z.ZodUnion<readonly [z.ZodLiteral<400>, z.ZodLiteral<700>]>;
            calloutTailAngle: z.ZodNumber;
            calloutTailLength: z.ZodNumber;
            calloutTailBinding: z.ZodNullable<z.ZodObject<{
                nodeId: z.ZodString;
                edge: z.ZodEnum<{
                    left: "left";
                    right: "right";
                    top: "top";
                    bottom: "bottom";
                }>;
                offsetRatio: z.ZodNumber;
            }, z.core.$strict>>;
        }, z.core.$strict>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodLiteral<"frame">;
    data: z.ZodObject<{
        title: z.ZodString;
        titleVariant: z.ZodObject<{
            placement: z.ZodEnum<{
                outside: "outside";
                inside: "inside";
            }>;
            horizontalAlign: z.ZodEnum<{
                left: "left";
                center: "center";
                right: "right";
            }>;
            verticalAlign: z.ZodEnum<{
                center: "center";
                top: "top";
                bottom: "bottom";
            }>;
            fontWeight: z.ZodUnion<readonly [z.ZodLiteral<300>, z.ZodLiteral<400>, z.ZodLiteral<500>, z.ZodLiteral<600>, z.ZodLiteral<700>]>;
            textOpacity: z.ZodNumber;
            sizeRatio: z.ZodNumber;
        }, z.core.$strict>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodLiteral<"group-frame">;
    data: z.ZodObject<{
        title: z.ZodString;
        titlePlacement: z.ZodEnum<{
            left: "left";
            right: "right";
            top: "top";
        }>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodLiteral<"iframe">;
    data: z.ZodObject<{
        url: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodLiteral<"table">;
    data: z.ZodObject<{
        activeSheetId: z.ZodString;
        sheets: z.ZodArray<z.ZodObject<{
            sheetId: z.ZodString;
            name: z.ZodString;
            cells: z.ZodArray<z.ZodArray<z.ZodString>>;
            columnHeaders: z.ZodArray<z.ZodString>;
            columnWidths: z.ZodArray<z.ZodNumber>;
            rowHeights: z.ZodArray<z.ZodString>;
            styles: z.ZodRecord<z.ZodString, z.ZodString>;
            comments: z.ZodRecord<z.ZodString, z.ZodString>;
            mergeCells: z.ZodRecord<z.ZodString, z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodLiteral<"drawio">;
    data: z.ZodObject<{
        svg: z.ZodNullable<z.ZodString>;
        aspectRatio: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodLiteral<"image">;
    data: z.ZodObject<{
        imageVariant: z.ZodNullable<z.ZodEnum<{
            preview: "preview";
            thumbnail: "thumbnail";
            original: "original";
            viewport: "viewport";
        }>>;
        imageStatus: z.ZodNullable<z.ZodEnum<{
            ready: "ready";
            missing: "missing";
            failed: "failed";
        }>>;
        alt: z.ZodString;
        aspectRatio: z.ZodNumber;
        crop: z.ZodNullable<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodLiteral<"git-diff">;
    data: z.ZodObject<{
        diffStatus: z.ZodEnum<{
            error: "error";
            ready: "ready";
            binary: "binary";
            "too-large": "too-large";
        }>;
        diffText: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strict>], "nodeType">;
/** Body-free node envelope shared by get_canvas and get_node. */
export declare const McpCanvasStructureNodeSchema: z.ZodObject<{
    nodeId: z.ZodString;
    nodeType: z.ZodEnum<{
        code: "code";
        "rich-text": "rich-text";
        "text-rectangle": "text-rectangle";
        callout: "callout";
        frame: "frame";
        "group-frame": "group-frame";
        table: "table";
        iframe: "iframe";
        drawio: "drawio";
        image: "image";
        "git-diff": "git-diff";
    }>;
    title: z.ZodNullable<z.ZodString>;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>;
    opacity: z.ZodNumber;
    scale: z.ZodNumber;
    rotation: z.ZodNumber;
    zIndex: z.ZodNumber;
    linkedSource: z.ZodNullable<z.ZodUnion<readonly [z.ZodObject<{
        kind: z.ZodLiteral<"file">;
        projectPath: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"drawio">;
        projectPath: z.ZodString;
        pageId: z.ZodNullable<z.ZodString>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"git-diff">;
        projectPath: z.ZodString;
        previousProjectPath: z.ZodNullable<z.ZodString>;
        commitOid: z.ZodString;
        changeType: z.ZodString;
    }, z.core.$strict>]>>;
    viewIds: z.ZodArray<z.ZodString>;
    groupIds: z.ZodArray<z.ZodString>;
    layerId: z.ZodNullable<z.ZodString>;
    aiCreated: z.ZodBoolean;
}, z.core.$strict>;
//# sourceMappingURL=readSchemas.d.ts.map