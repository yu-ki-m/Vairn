import type { StorageAdapter } from '../../storage/StorageAdapter.js';
import type { PendingEditTerminalStore } from './pendingEditStore.js';
/** Adapts the narrow terminal-only persistence contract without leaking pending bodies. */
export declare const createStoragePendingEditTerminalStore: (storage: Pick<StorageAdapter, "putAiPendingTerminal" | "getAiPendingTerminal" | "listAiPendingTerminals">) => PendingEditTerminalStore;
//# sourceMappingURL=storagePendingEditTerminalStore.d.ts.map