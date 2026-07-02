export interface BackendLogError {
    message: string;
    code?: string;
    stack?: string;
    metadata?: Record<string, unknown>;
}
export declare class BackendLogger {
    private readonly errorLogPath;
    constructor(logsDir: string);
    error(error: BackendLogError): void;
}
//# sourceMappingURL=logging.d.ts.map