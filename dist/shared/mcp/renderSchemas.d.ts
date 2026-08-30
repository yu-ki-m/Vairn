import { z } from 'zod';
export declare const McpCanvasRenderBoundsSchema: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
}, z.core.$strict>;
export declare const McpCanvasRenderTargetSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"activeViewport">;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"canvas">;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"view">;
    viewId: z.ZodString;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"objects">;
    objectIds: z.ZodArray<z.ZodString>;
}, z.core.$strict>, z.ZodObject<{
    kind: z.ZodLiteral<"bounds">;
    x: z.ZodNumber;
    y: z.ZodNumber;
    width: z.ZodNumber;
    height: z.ZodNumber;
}, z.core.$strict>], "kind">;
export declare const McpCanvasRenderRequestSchema: z.ZodObject<{
    canvasId: z.ZodOptional<z.ZodString>;
    target: z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"activeViewport">;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"canvas">;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"view">;
        viewId: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"objects">;
        objectIds: z.ZodArray<z.ZodString>;
    }, z.core.$strict>, z.ZodObject<{
        kind: z.ZodLiteral<"bounds">;
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>], "kind">;
    scale: z.ZodDefault<z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<2>]>>>;
}, z.core.$strict>;
export declare const McpCanvasRenderMetadataSchema: z.ZodObject<{
    canvasId: z.ZodString;
    revision: z.ZodNumber;
    target: z.ZodEnum<{
        view: "view";
        activeViewport: "activeViewport";
        canvas: "canvas";
        objects: "objects";
        bounds: "bounds";
    }>;
    bounds: z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, z.core.$strict>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    scale: z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<2>]>;
    mimeType: z.ZodLiteral<"image/png">;
    warnings: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
//# sourceMappingURL=renderSchemas.d.ts.map