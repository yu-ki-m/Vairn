/** Operations that manage explicit AI-owned Views and their object groups. */
export type ViewBatchOperation = {
    kind: 'createView';
    tempRef: string;
    name: string;
} | {
    kind: 'createGroup';
    tempRef: string;
    viewRef: string;
    name: string;
} | {
    kind: 'renameView';
    viewRef: string;
    name: string;
} | {
    kind: 'renameGroup';
    viewRef: string;
    groupRef: string;
    name: string;
} | {
    kind: 'assignObjectsToGroup';
    viewRef: string;
    groupRef: string;
    objectRefs: readonly string[];
} | {
    kind: 'deleteGroup';
    viewRef: string;
    groupRef: string;
} | {
    kind: 'deleteView';
    viewRef: string;
} | {
    kind: 'createLayer';
    tempRef: string;
    name: string;
    objectRefs?: readonly string[];
} | {
    kind: 'renameLayer';
    layerRef: string;
    name: string;
} | {
    kind: 'assignObjectsToLayer';
    layerRef: string;
    objectRefs: readonly string[];
} | {
    kind: 'deleteLayer';
    layerRef: string;
} | {
    kind: 'reorderLayer';
    layerRef: string;
    position: 'front' | 'back' | {
        before: string;
    } | {
        after: string;
    };
} | {
    kind: 'moveLayerObject';
    layerRef: string;
    objectRef: string;
    position: 'front' | 'back' | 'before' | 'after';
    relativeObjectRef?: string;
};
export type ViewCreateOperation = Extract<ViewBatchOperation, {
    tempRef: string;
}>;
//# sourceMappingURL=viewOperationTypes.d.ts.map