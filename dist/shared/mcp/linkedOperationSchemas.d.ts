import { z } from 'zod';
/** Exact Code intent: only Code accepts an initial line range. */
export declare const createLinkedCodeNodeOperationSchema: z.ZodObject<{
    linkedType: z.ZodLiteral<"code">;
    lineRange: z.ZodOptional<z.ZodObject<{
        startLine: z.ZodNumber;
        endLine: z.ZodNumber;
    }, z.core.$strict>>;
    kind: z.ZodLiteral<"createLinkedFileNode">;
    tempRef: z.ZodString;
    path: z.ZodString;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>;
/** Exact Markdown intent: source selection is the complete public input. */
export declare const createLinkedMarkdownNodeOperationSchema: z.ZodObject<{
    linkedType: z.ZodLiteral<"markdown-preview">;
    kind: z.ZodLiteral<"createLinkedFileNode">;
    tempRef: z.ZodString;
    path: z.ZodString;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>;
/** Exact Drawio intent: page selection applies only to a Drawio source. */
export declare const createLinkedDrawioNodeOperationSchema: z.ZodObject<{
    linkedType: z.ZodLiteral<"drawio">;
    pageId: z.ZodOptional<z.ZodString>;
    kind: z.ZodLiteral<"createLinkedFileNode">;
    tempRef: z.ZodString;
    path: z.ZodString;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>;
export declare const linkedFileNodeOperationSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    linkedType: z.ZodLiteral<"code">;
    lineRange: z.ZodOptional<z.ZodObject<{
        startLine: z.ZodNumber;
        endLine: z.ZodNumber;
    }, z.core.$strict>>;
    kind: z.ZodLiteral<"createLinkedFileNode">;
    tempRef: z.ZodString;
    path: z.ZodString;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    linkedType: z.ZodLiteral<"markdown-preview">;
    kind: z.ZodLiteral<"createLinkedFileNode">;
    tempRef: z.ZodString;
    path: z.ZodString;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    linkedType: z.ZodLiteral<"drawio">;
    pageId: z.ZodOptional<z.ZodString>;
    kind: z.ZodLiteral<"createLinkedFileNode">;
    tempRef: z.ZodString;
    path: z.ZodString;
    position: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strict>;
    size: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>], "linkedType">;
/** Strict public intent for a project text file rendered as a Code block. */
export declare const createLinkedFileNodeOperationSchema: z.ZodObject<{
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
}, z.core.$strict>;
export declare const linkedBatchOperationSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
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
}, z.core.$strict>], "kind">;
//# sourceMappingURL=linkedOperationSchemas.d.ts.map