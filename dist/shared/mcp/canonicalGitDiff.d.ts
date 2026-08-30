/**
 * Stable, header-free full-file diff used by every non-UI consumer.  Each
 * output line is one of unchanged=`' '+after`, added=`'+'+after`, or
 * deleted=`'-'+before`; paired changes intentionally retain both lines.
 */
export declare const buildCanonicalFullFileDiff: (beforeText: string, afterText: string) => string;
//# sourceMappingURL=canonicalGitDiff.d.ts.map