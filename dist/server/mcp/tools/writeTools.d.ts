import type { McpToolRegistrar } from './toolRegistrar.js';
/**
 * Public batch mutation tools. All writes reach the same service used by the
 * UI approval endpoint, so a deferred delete is re-authorized before commit.
 */
export declare const writeToolRegistrar: McpToolRegistrar;
//# sourceMappingURL=writeTools.d.ts.map