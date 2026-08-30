/**
 * The SDK's zod adapter in v1.29.0 emits draft-07 when no target is passed.
 * MCP public tool definitions are contractually JSON Schema 2020-12, so the
 * transport layer uses these explicit schemas instead of exposing that output.
 */
export declare const MCP_JSON_SCHEMA_DIALECT: "https://json-schema.org/draft/2020-12/schema";
export interface McpJsonSchema202012 {
    $schema: typeof MCP_JSON_SCHEMA_DIALECT;
    type: 'object';
    properties: Record<string, unknown>;
    required: string[];
    additionalProperties: false;
}
export declare const createMcpJsonSchema202012: (properties: Record<string, unknown>, required?: string[]) => McpJsonSchema202012;
//# sourceMappingURL=mcpSchema.d.ts.map