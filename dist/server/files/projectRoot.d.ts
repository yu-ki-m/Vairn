export declare class PathOutsideRootError extends Error {
    readonly inputPath: string;
    readonly code = "PATH_OUTSIDE_ROOT";
    constructor(inputPath: string);
}
export declare const toProjectRelativePath: (value: string) => string;
export declare const resolveProjectPath: (projectRoot: string, requestedPath?: string) => string;
export declare const assertProjectRelativePath: (projectRoot: string, requestedPath: string) => string;
//# sourceMappingURL=projectRoot.d.ts.map