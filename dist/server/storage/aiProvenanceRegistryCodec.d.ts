import type { AiProvenanceRegistryRecord, AiProvenanceRegistryReservation } from './StorageAdapter.js';
export declare const createAiProvenanceRegistryRecord: (reservation: AiProvenanceRegistryReservation) => AiProvenanceRegistryRecord;
/** Parses and verifies the non-public durable representation before exposing it internally. */
export declare const parseAiProvenanceRegistryRecord: (value: unknown) => AiProvenanceRegistryRecord;
//# sourceMappingURL=aiProvenanceRegistryCodec.d.ts.map