/** One shared Drawio suffix/format policy for Local Files and MCP. */
export declare const DRAWIO_FILE_FORMATS: readonly [{
    readonly suffix: ".drawio.svg";
    readonly format: "drawio-svg";
    readonly payloadClass: "svg";
}, {
    readonly suffix: ".dio.svg";
    readonly format: "dio-svg";
    readonly payloadClass: "svg";
}, {
    readonly suffix: ".drawio.png";
    readonly format: "drawio-png";
    readonly payloadClass: "png";
}, {
    readonly suffix: ".dio.png";
    readonly format: "dio-png";
    readonly payloadClass: "png";
}, {
    readonly suffix: ".drawio";
    readonly format: "drawio-xml";
    readonly payloadClass: "xml";
}, {
    readonly suffix: ".dio";
    readonly format: "dio-xml";
    readonly payloadClass: "xml";
}];
export type SharedDrawioFileFormat = (typeof DRAWIO_FILE_FORMATS)[number]['format'];
export type DrawioPayloadClass = (typeof DRAWIO_FILE_FORMATS)[number]['payloadClass'];
export declare const DRAWIO_FILE_SUFFIXES: (".drawio.svg" | ".dio.svg" | ".drawio.png" | ".dio.png" | ".drawio" | ".dio")[];
export declare const drawioFormatEntryForPath: (value: string) => {
    readonly suffix: ".drawio.svg";
    readonly format: "drawio-svg";
    readonly payloadClass: "svg";
} | {
    readonly suffix: ".dio.svg";
    readonly format: "dio-svg";
    readonly payloadClass: "svg";
} | {
    readonly suffix: ".drawio.png";
    readonly format: "drawio-png";
    readonly payloadClass: "png";
} | {
    readonly suffix: ".dio.png";
    readonly format: "dio-png";
    readonly payloadClass: "png";
} | {
    readonly suffix: ".drawio";
    readonly format: "drawio-xml";
    readonly payloadClass: "xml";
} | {
    readonly suffix: ".dio";
    readonly format: "dio-xml";
    readonly payloadClass: "xml";
} | undefined;
export declare const drawioFormatForPath: (value: string) => SharedDrawioFileFormat | null;
export declare const drawioPayloadClassForPath: (value: string) => DrawioPayloadClass | null;
export declare const drawioPayloadClassForFormat: (format: SharedDrawioFileFormat) => DrawioPayloadClass;
export declare const isSupportedDrawioFilePath: (value: string) => boolean;
//# sourceMappingURL=drawioFormats.d.ts.map