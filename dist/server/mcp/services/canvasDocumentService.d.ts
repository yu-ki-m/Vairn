import type { AiWorkspaceSettingsRecord, PartitionRecord } from '../../storage/StorageAdapter.js';
import type { WorkspaceLoadService } from '../../workspace/workspaceLoadService.js';
import type { WorkspaceRole } from '#shared/types/backend.js';
import { MCP_READABLE_NODE_TYPES, type McpReadableNodeContent, type McpReadableNodeType } from '#shared/mcp/readTypes.js';
export declare const DEFAULT_AI_WORKSPACE_SETTINGS: Omit<AiWorkspaceSettingsRecord, 'workspaceId'>;
export interface CanonicalCanvasDocument<T = unknown> {
    document: PartitionRecord<T>;
    revision: number;
}
export { MCP_READABLE_NODE_TYPES };
export interface WorkspaceOverviewAccess {
    role: WorkspaceRole;
    /** Team workspaces require the persisted workspace-wide AI gate. */
    externalAccess: boolean;
}
export interface ActiveCanvasViewport {
    x: number;
    y: number;
    width: number;
    height: number;
    zoom: number;
}
/** Minimal server-only view of fresh realtime UI state. */
export interface ActiveCanvasPresence {
    findLatestForUser(userId: string, maxAgeMs: number): {
        activeCanvasId?: string;
        viewport?: ActiveCanvasViewport;
    } | undefined;
}
export interface WorkspaceOverviewTreeFolder {
    kind: 'folder';
    groupId: string;
    name: string;
    children: WorkspaceOverviewTreeEntry[];
}
export interface WorkspaceOverviewTreeCanvas {
    kind: 'canvas';
    canvasId: string;
    name: string;
}
export type WorkspaceOverviewTreeEntry = WorkspaceOverviewTreeFolder | WorkspaceOverviewTreeCanvas;
export interface WorkspaceOverviewCanvasSummary {
    canvasId: string;
    name: string;
    revision: number;
    nodeCounts: Record<McpReadableNodeType, number>;
    viewNames: string[];
    groupNames: string[];
    layerNames: string[];
    linkedFilePaths: string[];
    aiWritable: boolean;
    referenceMode: boolean;
    updatedAt: string;
}
export interface WorkspaceOverview {
    [key: string]: unknown;
    treeRevision: number;
    tree: WorkspaceOverviewTreeEntry[];
    canvases: WorkspaceOverviewCanvasSummary[];
}
export interface CanvasStructureNode {
    nodeId: string;
    nodeType: McpReadableNodeType;
    title: string | null;
    position: {
        x: number;
        y: number;
    };
    size: {
        width: number;
        height: number;
    };
    opacity: number;
    scale: number;
    rotation: number;
    zIndex: number;
    linkedSource: Record<string, unknown> | null;
    viewIds: string[];
    groupIds: string[];
    layerId: string | null;
    aiCreated: boolean;
}
export interface CanvasStructureArrow {
    arrowId: string;
    start: Record<string, unknown>;
    end: Record<string, unknown>;
    lineType: 'straight' | 'elbow';
    lineStyle: 'solid' | 'dashed' | 'dotted' | 'dash-dot';
    startMarker: 'none' | 'arrow';
    endMarker: 'none' | 'arrow';
    color: string;
    bendPoints: Array<{
        x: number;
        y: number;
    }>;
    zIndex: number;
    viewIds: string[];
    groupIds: string[];
    layerId: string | null;
    aiCreated: boolean;
}
/**
 * Server-only ink projection used exclusively by the static canvas renderer.
 * It deliberately remains outside the normal MCP canvas-read contract.
 */
export interface CanvasRenderStroke {
    strokeId: string;
    points: Array<{
        x: number;
        y: number;
    }>;
    bounds: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    zIndex: number;
    viewIds: string[];
    groupIds: string[];
    layerId: string | null;
}
export interface CanvasDetail {
    [key: string]: unknown;
    canvasId: string;
    name: string;
    revision: number;
    detail: 'structure' | 'full';
    viewId: string | null;
    structure: {
        nodes: CanvasStructureNode[];
        arrows: CanvasStructureArrow[];
        views: Array<{
            viewId: string;
            name: string;
            groups: Array<{
                groupId: string;
                name: string;
                objectIds: string[];
                aiCreated: boolean;
            }>;
            aiCreated: boolean;
        }>;
        layers: Array<{
            layerId: string;
            name: string;
            objectIds: string[];
            aiCreated: boolean;
        }>;
    };
    contents: McpReadableNodeContent[];
    nextCursor: string | null;
}
/** Server-only, revision-fixed source for a static canvas image. */
export interface CanvasRenderSnapshot {
    canvasId: string;
    name: string;
    revision: number;
    detail: 'structure' | 'full';
    viewId: string | null;
    structure: CanvasDetail['structure'];
    contents: McpReadableNodeContent[];
    strokes: CanvasRenderStroke[];
}
export interface CanvasNodeDetail {
    [key: string]: unknown;
    canvasId: string;
    revision: number;
    node: CanvasStructureNode;
    content: McpReadableNodeContent;
}
export interface CanvasSearchResult {
    [key: string]: unknown;
    items: Array<{
        canvasId: string;
        canvasName: string;
        nodeId: string;
        nodeType: McpReadableNodeType;
        matchedField: 'title' | 'body';
        snippet: string;
    }>;
    truncated: boolean;
}
/** A cursor is structurally valid but belongs to an older canonical revision. */
export declare class CanvasReadCursorExpiredError extends Error {
    constructor();
}
/** A malformed, altered, or context-mismatched continuation cursor. */
export declare class CanvasReadInvalidCursorError extends Error {
    constructor();
}
/** A full canvas page cannot make progress without exceeding the response cap. */
export declare class CanvasReadResponseTooLargeError extends Error {
    constructor();
}
/** A canvas changed while collecting its paged full-content render snapshot. */
export declare class CanvasRenderSnapshotExpiredError extends Error {
    constructor();
}
/** Server-owned Git reader; request data cannot select a filesystem root. */
export interface GitDiffReadSource {
    read(input: {
        commitOid: string;
        projectPath: string;
        previousProjectPath: string | undefined;
        changeType: 'added' | 'modified' | 'deleted' | 'renamed' | 'unsupported';
    }): Promise<{
        status: 'ready' | 'binary' | 'too-large' | 'error';
        diffText: string | null;
    }>;
}
export interface ActiveCanvasResult {
    [key: string]: unknown;
    resolution: 'ui-session' | 'no_ui_session';
    canvasId: string | null;
    revision: number | null;
    viewport: ActiveCanvasViewport | null;
    items: Array<{
        kind: 'node';
        nodeId: string;
        nodeType: McpReadableNodeType;
        title: string | null;
        bounds: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        zIndex: number;
    } | {
        kind: 'arrow';
        arrowId: string;
        bounds: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        zIndex: number;
    }>;
    truncated: boolean;
}
/**
 * The only MCP document loader.  No client-supplied workspace or persistence
 * slot is accepted: the process-owned authority is used for every read.
 */
export declare class CanvasDocumentService {
    private readonly workspaceLoadService;
    private readonly activeCanvasPresence?;
    private readonly gitDiffSource?;
    constructor(workspaceLoadService: WorkspaceLoadService, activeCanvasPresence?: ActiveCanvasPresence | undefined, gitDiffSource?: GitDiffReadSource | undefined);
    private readableNodeData;
    private renderStrokesFor;
    loadCanonicalDocument<T = unknown>(): Promise<CanonicalCanvasDocument<T> | undefined>;
    loadAiWorkspaceSettings(): Promise<AiWorkspaceSettingsRecord>;
    /**
     * Projects the fixed canonical partition into the deliberately body-free
     * workspace overview.  It never returns live canvas records, so persisted
     * editor content, strokes, backgrounds, selection, and scroll state cannot
     * cross the MCP read boundary by accident.
     */
    loadWorkspaceOverview(access: WorkspaceOverviewAccess): Promise<WorkspaceOverview | undefined>;
    /**
     * Returns the first user-facing canvas read projection.  This deliberately
     * exposes only persisted nodes/arrows and membership IDs: editor bodies,
     * strokes, backgrounds, selection, and scroll state remain private to the
     * full-content and node-detail projections added in later read slices.
     */
    loadCanvasDetail({ canvasId, viewId: requestedViewId, detail, cursor }: {
        canvasId: string;
        viewId?: string;
        detail?: 'structure' | 'full';
        cursor?: string;
    }): Promise<CanvasDetail | undefined>;
    loadNodeDetail({ canvasId, nodeId }: {
        canvasId: string;
        nodeId: string;
    }): Promise<CanvasNodeDetail | undefined>;
    /**
     * Collects the full readable projection for exactly one saved canvas revision.
     * The projection stays server-only; unlike MCP reads, it is never serialized
     * directly and can therefore be rendered without leaking raw editor state.
     */
    loadCanvasRenderSnapshot({ canvasId, viewId }: {
        canvasId: string;
        viewId?: string;
    }): Promise<CanvasRenderSnapshot | undefined>;
    searchCanvasContent({ query, canvasId, limit }: {
        query: string;
        canvasId?: string;
        limit?: number;
    }): Promise<CanvasSearchResult | undefined>;
    loadActiveCanvas({ subject }?: {
        subject?: string;
    }): Promise<ActiveCanvasResult | undefined>;
    private toLiveActiveCanvasResult;
}
//# sourceMappingURL=canvasDocumentService.d.ts.map