import { z } from 'zod';
import type { McpToolRegistrar } from './toolRegistrar.js';
/** Exported for transport-level contract tests; this is the public overview shape. */
export declare const workspaceOverviewOutputSchema: z.ZodObject<{
    treeRevision: z.ZodNumber;
    tree: z.ZodArray<z.ZodType<unknown, unknown, z.core.$ZodTypeInternals<unknown, unknown>>>;
    canvases: z.ZodArray<z.ZodObject<{
        canvasId: z.ZodString;
        name: z.ZodString;
        revision: z.ZodNumber;
        nodeCounts: z.ZodObject<{
            code: z.ZodNumber;
            'rich-text': z.ZodNumber;
            'text-rectangle': z.ZodNumber;
            callout: z.ZodNumber;
            frame: z.ZodNumber;
            'group-frame': z.ZodNumber;
            iframe: z.ZodNumber;
            table: z.ZodNumber;
            drawio: z.ZodNumber;
            image: z.ZodNumber;
            'git-diff': z.ZodNumber;
        }, z.core.$strict>;
        viewNames: z.ZodArray<z.ZodString>;
        groupNames: z.ZodArray<z.ZodString>;
        layerNames: z.ZodArray<z.ZodString>;
        linkedFilePaths: z.ZodArray<z.ZodString>;
        aiWritable: z.ZodBoolean;
        referenceMode: z.ZodBoolean;
        updatedAt: z.ZodString;
    }, z.core.$strict>>;
}, z.core.$strict>;
/** Exported for transport-level contract tests; no editor body fields are allowed here. */
export declare const canvasStructureOutputSchema: z.ZodObject<{
    nodes: z.ZodArray<z.ZodObject<{
        nodeId: z.ZodString;
        nodeType: z.ZodEnum<{
            code: "code";
            image: "image";
            table: "table";
            drawio: "drawio";
            "rich-text": "rich-text";
            "text-rectangle": "text-rectangle";
            callout: "callout";
            frame: "frame";
            "group-frame": "group-frame";
            "git-diff": "git-diff";
            iframe: "iframe";
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
    }, z.core.$strict>>;
    arrows: z.ZodArray<z.ZodObject<{
        arrowId: z.ZodString;
        start: z.ZodUnion<readonly [z.ZodObject<{
            kind: z.ZodLiteral<"node">;
            nodeId: z.ZodString;
            edge: z.ZodEnum<{
                top: "top";
                right: "right";
                bottom: "bottom";
                left: "left";
            }>;
            offsetRatio: z.ZodNumber;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"point">;
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>]>;
        end: z.ZodUnion<readonly [z.ZodObject<{
            kind: z.ZodLiteral<"node">;
            nodeId: z.ZodString;
            edge: z.ZodEnum<{
                top: "top";
                right: "right";
                bottom: "bottom";
                left: "left";
            }>;
            offsetRatio: z.ZodNumber;
        }, z.core.$strict>, z.ZodObject<{
            kind: z.ZodLiteral<"point">;
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>]>;
        lineType: z.ZodEnum<{
            straight: "straight";
            elbow: "elbow";
        }>;
        lineStyle: z.ZodEnum<{
            solid: "solid";
            dashed: "dashed";
            dotted: "dotted";
            "dash-dot": "dash-dot";
        }>;
        startMarker: z.ZodEnum<{
            arrow: "arrow";
            none: "none";
        }>;
        endMarker: z.ZodEnum<{
            arrow: "arrow";
            none: "none";
        }>;
        color: z.ZodString;
        bendPoints: z.ZodArray<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strict>>;
        zIndex: z.ZodNumber;
        viewIds: z.ZodArray<z.ZodString>;
        groupIds: z.ZodArray<z.ZodString>;
        layerId: z.ZodNullable<z.ZodString>;
        aiCreated: z.ZodBoolean;
    }, z.core.$strict>>;
    views: z.ZodArray<z.ZodObject<{
        viewId: z.ZodString;
        name: z.ZodString;
        groups: z.ZodArray<z.ZodObject<{
            groupId: z.ZodString;
            name: z.ZodString;
            objectIds: z.ZodArray<z.ZodString>;
            aiCreated: z.ZodBoolean;
        }, z.core.$strict>>;
        aiCreated: z.ZodBoolean;
    }, z.core.$strict>>;
    layers: z.ZodArray<z.ZodObject<{
        layerId: z.ZodString;
        name: z.ZodString;
        objectIds: z.ZodArray<z.ZodString>;
        aiCreated: z.ZodBoolean;
    }, z.core.$strict>>;
}, z.core.$strict>;
/** Exported for transport-level contract tests; full body data is isolated in contents. */
export declare const canvasDetailOutputSchema: z.ZodObject<{
    canvasId: z.ZodString;
    name: z.ZodString;
    revision: z.ZodNumber;
    detail: z.ZodEnum<{
        structure: "structure";
        full: "full";
    }>;
    viewId: z.ZodNullable<z.ZodString>;
    structure: z.ZodObject<{
        nodes: z.ZodArray<z.ZodObject<{
            nodeId: z.ZodString;
            nodeType: z.ZodEnum<{
                code: "code";
                image: "image";
                table: "table";
                drawio: "drawio";
                "rich-text": "rich-text";
                "text-rectangle": "text-rectangle";
                callout: "callout";
                frame: "frame";
                "group-frame": "group-frame";
                "git-diff": "git-diff";
                iframe: "iframe";
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
        }, z.core.$strict>>;
        arrows: z.ZodArray<z.ZodObject<{
            arrowId: z.ZodString;
            start: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"node">;
                nodeId: z.ZodString;
                edge: z.ZodEnum<{
                    top: "top";
                    right: "right";
                    bottom: "bottom";
                    left: "left";
                }>;
                offsetRatio: z.ZodNumber;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"point">;
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strict>]>;
            end: z.ZodUnion<readonly [z.ZodObject<{
                kind: z.ZodLiteral<"node">;
                nodeId: z.ZodString;
                edge: z.ZodEnum<{
                    top: "top";
                    right: "right";
                    bottom: "bottom";
                    left: "left";
                }>;
                offsetRatio: z.ZodNumber;
            }, z.core.$strict>, z.ZodObject<{
                kind: z.ZodLiteral<"point">;
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strict>]>;
            lineType: z.ZodEnum<{
                straight: "straight";
                elbow: "elbow";
            }>;
            lineStyle: z.ZodEnum<{
                solid: "solid";
                dashed: "dashed";
                dotted: "dotted";
                "dash-dot": "dash-dot";
            }>;
            startMarker: z.ZodEnum<{
                arrow: "arrow";
                none: "none";
            }>;
            endMarker: z.ZodEnum<{
                arrow: "arrow";
                none: "none";
            }>;
            color: z.ZodString;
            bendPoints: z.ZodArray<z.ZodObject<{
                x: z.ZodNumber;
                y: z.ZodNumber;
            }, z.core.$strict>>;
            zIndex: z.ZodNumber;
            viewIds: z.ZodArray<z.ZodString>;
            groupIds: z.ZodArray<z.ZodString>;
            layerId: z.ZodNullable<z.ZodString>;
            aiCreated: z.ZodBoolean;
        }, z.core.$strict>>;
        views: z.ZodArray<z.ZodObject<{
            viewId: z.ZodString;
            name: z.ZodString;
            groups: z.ZodArray<z.ZodObject<{
                groupId: z.ZodString;
                name: z.ZodString;
                objectIds: z.ZodArray<z.ZodString>;
                aiCreated: z.ZodBoolean;
            }, z.core.$strict>>;
            aiCreated: z.ZodBoolean;
        }, z.core.$strict>>;
        layers: z.ZodArray<z.ZodObject<{
            layerId: z.ZodString;
            name: z.ZodString;
            objectIds: z.ZodArray<z.ZodString>;
            aiCreated: z.ZodBoolean;
        }, z.core.$strict>>;
    }, z.core.$strict>;
    contents: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
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
    }, z.core.$strict>], "nodeType">>;
    nextCursor: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export declare const readToolRegistrar: McpToolRegistrar;
//# sourceMappingURL=readTools.d.ts.map