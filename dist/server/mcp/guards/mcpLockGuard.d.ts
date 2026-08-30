import type { ToolError } from '../../../../shared/mcp/coreTypes.js';
/** Keeps lock precedence reusable without leaking lock-holder identity to MCP. */
export declare const lockedMcpToolError: (locked: boolean) => ToolError | undefined;
//# sourceMappingURL=mcpLockGuard.d.ts.map