import type { McpToolRegistrar } from './toolRegistrar.js';
/**
 * Tree management is intentionally separate from object batching, but every
 * persistent mutation still uses the same coordinator and receipt/outbox
 * transaction.  New canvas results are immediately usable as batch targets.
 */
export declare const manageToolRegistrar: McpToolRegistrar;
//# sourceMappingURL=manageTools.d.ts.map