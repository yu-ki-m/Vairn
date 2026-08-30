import { z } from 'zod';
export declare const viewBatchOperationSchema: z.ZodDiscriminatedUnion<[z.ZodObject<{
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
//# sourceMappingURL=viewOperationSchemas.d.ts.map