import type { ServerConfig } from '../config/serverConfig.js';
import type { StorageAdapter } from './StorageAdapter.js';
/**
 * 設定に応じた StorageAdapter を生成する。team（databaseUrl 指定）は PostgreSQL、
 * それ以外（standalone）は SQLite。ワークスペースと画像メタデータで単一インスタンスを
 * 共有するため、生成はサーバ起動時に一度だけ行う。
 */
export declare const createStorageAdapter: (config: ServerConfig) => StorageAdapter;
//# sourceMappingURL=createStorageAdapter.d.ts.map