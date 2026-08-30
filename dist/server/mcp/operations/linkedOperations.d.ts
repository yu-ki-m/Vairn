import type { LinkedBatchOperation } from '#shared/mcp/linkedOperationTypes.js';
import type { AiProvenance } from '#shared/workspace/aiProvenance.js';
import type { PreparedAiImageIngest } from '../../images/aiImageIngestPreparationService.js';
import { type GenericCanvasDraft, type GenericOperationResult } from './genericOperations.js';
import { type McpOperationRegistry } from './operationTypes.js';
export interface LinkedTextFileSource {
    readonly rootName: string;
    readTextFile(projectPath: string): Promise<{
        relativePath: string;
        content: string;
    }>;
}
export interface GitDiffNodeSource {
    readChangedFile(commitOid: string, filePath: string): Promise<{
        path: string;
        previousPath?: string;
        changeType: 'added' | 'modified' | 'deleted' | 'renamed' | 'unsupported';
    }>;
}
export type LinkedDrawioFormat = 'drawio-xml' | 'dio-xml' | 'drawio-svg' | 'dio-svg' | 'drawio-png' | 'dio-png';
export interface LinkedDrawioSource {
    readonly rootId: string;
    readonly rootName: string;
    readDrawioFile(projectPath: string): Promise<{
        relativePath: string;
        fileName: string;
        format: LinkedDrawioFormat;
        sourceKey: string;
        resourceId: string;
        sourceRevision: string;
        pageIds: readonly string[];
    }>;
}
export interface LinkedImageSource {
    prepareImage(input: {
        workspaceId: string;
        changeId: string;
        projectPath: string;
        now: string;
    }): Promise<PreparedAiImageIngest>;
    compensate(prepared: PreparedAiImageIngest): Promise<void>;
}
export interface LinkedDrawioRegistryEntry {
    id: string;
    binding: {
        rootId: string;
        rootName: string;
        relativePath: string;
        fileName: string;
        canonicalPathKey: string;
    };
    sourceKey: string;
    resourceId: string;
    format: LinkedDrawioFormat;
    sourceRevision: string | null;
    entryRevision: number;
    connectionState: 'connected';
    cachedPreview?: string;
    aspectRatio?: number;
    sharedPageId?: string;
}
export interface LinkedOperationApplyOptions {
    readonly resolveCreateId: (tempRef: string) => string;
    readonly provenance: AiProvenance;
    readonly source?: LinkedTextFileSource;
    readonly gitDiffSource?: GitDiffNodeSource;
    readonly drawioSource?: LinkedDrawioSource;
    readonly imageSource?: LinkedImageSource;
    readonly imageContext?: {
        workspaceId: string;
        changeId: string;
        now: string;
    };
    /** Existing canonical entries, keyed by entry ID.  Redirects are compacted
     * by the normal workspace persistence path and are not created by MCP. */
    readonly linkedDrawioFiles?: Readonly<Record<string, LinkedDrawioRegistryEntry>>;
}
export interface LinkedOperationExecutionInput {
    canvas: GenericCanvasDraft;
    operation: LinkedBatchOperation;
    options: LinkedOperationApplyOptions;
}
export declare const applyLinkedOperation: (source: GenericCanvasDraft, operation: LinkedBatchOperation, options: LinkedOperationApplyOptions) => Promise<GenericOperationResult>;
/** Linked file creation operations in the same catalog used by the MCP endpoint. */
export declare const createLinkedOperations: () => McpOperationRegistry;
//# sourceMappingURL=linkedOperations.d.ts.map