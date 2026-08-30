import { type BatchEditRequest, type BatchEditResult } from '#shared/mcp/batchTypes.js';
import { type AiObjectId } from '#shared/mcp/operationCatalog.js';
import type { AiProvenanceKind } from '#shared/workspace/aiProvenance.js';
import type { AiPendingTerminalRecord } from '../../storage/StorageAdapter.js';
import { type GitDiffNodeSource, type LinkedDrawioSource, type LinkedImageSource, type LinkedTextFileSource } from '../operations/linkedOperations.js';
import { CanvasDocumentService } from '../services/canvasDocumentService.js';
import { McpMutationCoordinator } from '../services/mcpMutationCoordinator.js';
export interface BatchExecutorClock {
    now(): string;
}
export interface BatchEditExecutorOptions {
    now?: () => string;
    createId?: (prefix: 'batch' | 'change' | 'receipt' | 'event') => string;
    createObjectId?: (kind: AiProvenanceKind) => AiObjectId;
    linkedFileSource?: LinkedTextFileSource;
    gitDiffSource?: GitDiffNodeSource;
    drawioSource?: LinkedDrawioSource;
    imageSource?: LinkedImageSource;
}
export interface BatchEditExecutionInput {
    actor: string;
    subject: string;
    request: BatchEditRequest;
    /** A deletion-confirmation pending record allocates this before UI approval. */
    batchId?: string;
    /**
     * Invoked after the final receipt projection has been constructed but before
     * the mutation commits.  The returned terminal receipt joins that exact
     * storage transaction.
     */
    preparePendingTerminal?: (result: Extract<BatchEditResult, {
        status: 'applied';
    }>) => AiPendingTerminalRecord;
}
/**
 * Phase-2B generic executor.  It creates a detached sequential draft first,
 * proves all internal/public payload limits, then delegates exactly one CAS,
 * provenance/journal/receipt/outbox transaction to McpMutationCoordinator.
 */
export declare class BatchEditExecutor {
    private readonly documents;
    private readonly mutations;
    private readonly clock;
    private readonly createId;
    private readonly createObjectId;
    private readonly linkedFileSource;
    private readonly gitDiffSource;
    private readonly drawioSource;
    private readonly imageSource;
    constructor(documents: CanvasDocumentService, mutations: McpMutationCoordinator, options?: BatchEditExecutorOptions);
    execute(input: BatchEditExecutionInput): Promise<Extract<BatchEditResult, {
        status: 'applied';
    }>>;
}
//# sourceMappingURL=batchEditExecutor.d.ts.map