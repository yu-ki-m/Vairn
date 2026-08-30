/**
 * The one shared policy for Local Files and MCP raster image imports.
 * SVG deliberately remains a Drawio/code source and is never an image import.
 */
/**
 * The single raster policy.  Every extension/MIME conversion must derive
 * from this table so Local Files, browser imports, and MCP cannot drift.
 */
export declare const RASTER_IMAGE_FILE_FORMATS: readonly [{
    readonly extension: "apng";
    readonly mimeType: "image/apng";
    readonly aliases: readonly [];
}, {
    readonly extension: "avif";
    readonly mimeType: "image/avif";
    readonly aliases: readonly [];
}, {
    readonly extension: "bmp";
    readonly mimeType: "image/bmp";
    readonly aliases: readonly [];
}, {
    readonly extension: "gif";
    readonly mimeType: "image/gif";
    readonly aliases: readonly [];
}, {
    readonly extension: "ico";
    readonly mimeType: "image/vnd.microsoft.icon";
    readonly aliases: readonly ["image/x-icon"];
}, {
    readonly extension: "jpeg";
    readonly mimeType: "image/jpeg";
    readonly aliases: readonly [];
}, {
    readonly extension: "jpg";
    readonly mimeType: "image/jpeg";
    readonly aliases: readonly [];
}, {
    readonly extension: "png";
    readonly mimeType: "image/png";
    readonly aliases: readonly [];
}, {
    readonly extension: "webp";
    readonly mimeType: "image/webp";
    readonly aliases: readonly [];
}];
export declare const RASTER_IMAGE_FILE_EXTENSIONS: ("png" | "apng" | "avif" | "bmp" | "gif" | "ico" | "jpeg" | "jpg" | "webp")[];
export declare const RASTER_IMAGE_FILE_MIME_TYPES: ("image/png" | "image/apng" | "image/avif" | "image/bmp" | "image/gif" | "image/vnd.microsoft.icon" | "image/x-icon" | "image/jpeg" | "image/webp")[];
export declare const rasterImageExtensionForPath: (value: string) => string;
export declare const isSupportedRasterImagePath: (value: string) => boolean;
export declare const isSupportedRasterImageMimeType: (value: string) => boolean;
export declare const rasterImageMimeTypeForPath: (value: string) => string | null;
/** Resolves the canonical extension for a declared raster MIME type. */
export declare const rasterImageExtensionForMimeType: (value: string) => string | null;
export declare const isSupportedRasterImageFile: (input: {
    name: string;
    type?: string;
}, relativePath?: string) => boolean;
export declare const rasterImageAcceptList: () => string;
//# sourceMappingURL=imageFormats.d.ts.map