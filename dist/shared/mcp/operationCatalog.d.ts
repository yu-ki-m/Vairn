import { type AiProvenanceKind } from '../workspace/aiProvenance.js';
export { BASIC_OPERATION_KINDS } from './basicOperationCatalog.js';
export type { BasicOperationKind } from './basicOperationCatalog.js';
/** The generic vocabulary is public now; story-specific kinds extend it in their own modules. */
export declare const GENERIC_OPERATION_KINDS: readonly ["updateNode", "deleteNode", "updateArrow", "deleteArrow"];
export type GenericOperationKind = (typeof GENERIC_OPERATION_KINDS)[number];
/** A server-issued ID is the only durable identifier that an AI create may receive. */
export type AiObjectId<Kind extends AiProvenanceKind = AiProvenanceKind> = `ai-${Kind}-${string}`;
export declare const TEMP_REF_PATTERN: RegExp;
export interface CreateDependencyDescriptor {
    tempRef: string;
    kind: AiProvenanceKind;
    /** Typed create dependencies only. Existing stable IDs are not listed here. */
    dependencyTempRefs?: readonly string[];
}
export interface CreatePreflightResult {
    idMap: Readonly<Record<string, AiObjectId>>;
    dependencyOrder: readonly string[];
}
/**
 * Allocates every create ID before mutation and deterministically validates the
 * create-only dependency graph.  It deliberately leaves stable-ID existence
 * checks to the document service, which owns the canonical snapshot.
 */
export declare const preflightCreateDependencies: (creates: readonly CreateDependencyDescriptor[], allocate: (kind: AiProvenanceKind) => AiObjectId) => CreatePreflightResult;
/** Non-create operations may refer only to a base ID or an earlier create. */
export declare const assertSequentialMutationReference: (reference: string, precedingCreateTempRefs: ReadonlySet<string>) => void;
//# sourceMappingURL=operationCatalog.d.ts.map