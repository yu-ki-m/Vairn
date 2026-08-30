import type { ToolError, ToolErrorCode } from '#shared/mcp/coreTypes.js';
export type McpTopLevelToolErrorCode = Exclude<ToolErrorCode, 'confirmation_expired'>;
export interface McpTextContent {
    type: 'text';
    text: string;
}
export interface McpImageContent {
    type: 'image';
    data: string;
    mimeType: 'image/png';
}
export interface McpToolSuccessResult<T> {
    [key: string]: unknown;
    content: [McpTextContent];
    structuredContent: T;
}
export interface McpToolErrorResult {
    [key: string]: unknown;
    isError: true;
    content: [McpTextContent];
}
export interface McpImageToolSuccessResult<T> {
    [key: string]: unknown;
    content: [McpTextContent, McpImageContent];
    structuredContent: T;
}
/**
 * Converts an already-safe, top-level MCP ToolError into the SDK result
 * envelope.  `confirmation_expired` is intentionally UI/pending-only and
 * cannot be emitted as a top-level MCP execution error.
 */
export declare const createMcpToolErrorResult: (error: ToolError) => McpToolErrorResult;
/** Ensures success text and structuredContent are exactly the same JSON value. */
export declare const createMcpToolSuccessResult: <T>(value: T) => McpToolSuccessResult<T>;
/**
 * A visual result retains the existing JSON text projection for hosts that do
 * not surface image content, while image-capable MCP hosts receive raw PNG
 * base64 without duplicating it in structuredContent.
 */
export declare const createMcpImageToolSuccessResult: <T>(value: T, image: {
    data: string;
    mimeType: "image/png";
}) => McpImageToolSuccessResult<T>;
/**
 * Unknown exceptions deliberately discard their original messages.  Runtime
 * errors can contain paths, tokens, SQL, stacks, or user content; only an
 * opaque correlation id is allowed to cross the MCP boundary.
 */
export declare const mapUnhandledMcpToolError: (correlationId: string, retryable?: boolean, _cause?: unknown) => McpToolErrorResult;
//# sourceMappingURL=toolErrors.d.ts.map