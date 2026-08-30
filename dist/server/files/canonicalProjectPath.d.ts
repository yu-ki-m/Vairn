export declare class ProjectPathAliasError extends Error {
    readonly code = "DRAWIO_PATH_ALIAS_FORBIDDEN";
    constructor(inputPath: string);
}
/**
 * Resolve a project-relative target while rejecting every existing symlink
 * component. The final realpath check prevents a race from escaping root.
 */
export declare function resolveCanonicalProjectPath(projectRoot: string, requestedPath: string): Promise<{
    canonicalRoot: string;
    relativePath: string;
    absolutePath: string;
}>;
//# sourceMappingURL=canonicalProjectPath.d.ts.map