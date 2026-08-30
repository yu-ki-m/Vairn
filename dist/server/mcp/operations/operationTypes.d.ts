/**
 * Stable internal contract shared by every MCP operation family.  Public tool
 * schemas and authorization are added by later phases; registrars can already
 * depend on this shape without receiving a Fastify request or a client-chosen
 * workspace identity.
 */
export type McpOperationFamily = 'generic' | 'basic' | 'linked' | 'view';
export interface McpOperationContext {
    readonly workspaceId: 'local-workspace';
    readonly partitionType: 'workspace';
    readonly partitionEntityId: 'primary-workspace';
    readonly actor: string;
    readonly subject: string;
}
export interface McpOperation<Input = unknown, Output = unknown> {
    readonly id: string;
    readonly family: McpOperationFamily;
    execute(context: McpOperationContext, input: Input): Promise<Output>;
}
export interface McpOperationRegistry {
    readonly family: McpOperationFamily;
    readonly operations: readonly McpOperation[];
    find(operationId: string): McpOperation | undefined;
}
export type McpOperationResolution = {
    kind: 'dispatched';
    operation: McpOperation;
} | {
    kind: 'invalid_input';
} | {
    kind: 'unsupported_operation';
} | {
    kind: 'internal_error';
    message: 'The operation catalog is not fully registered.';
};
export declare const createMcpOperationRegistry: (family: McpOperationFamily, operations?: readonly McpOperation[]) => McpOperationRegistry;
/**
 * Resolves a public, schema-known kind without conflating three safety
 * boundaries: unknown input, a server/catalog wiring defect, and a known
 * operation that is semantically unsupported for its chosen target.
 */
export declare const resolveMcpOperation: (registries: readonly McpOperationRegistry[], schemaKnownOperationIds: readonly string[], operationId: string, options?: {
    targetSupported?: boolean;
}) => McpOperationResolution;
//# sourceMappingURL=operationTypes.d.ts.map