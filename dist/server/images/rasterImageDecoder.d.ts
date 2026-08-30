import { type SharpOptions } from 'sharp';
export interface RasterProcessingInput {
    /** Input accepted by sharp. For fallback formats this is decoded RGBA data. */
    data: Buffer;
    options?: SharpOptions;
}
/**
 * Returns a sharp-compatible source for every advertised raster extension.
 * libvips handles APNG/AVIF/GIF/JPEG/PNG/WebP itself; BMP and ICO use the
 * compact decoders above on builds where libvips omits those loaders.
 */
export declare const rasterProcessingInput: (input: {
    buffer: Buffer;
    sourcePath?: string;
    mimeType?: string;
}) => Promise<RasterProcessingInput>;
//# sourceMappingURL=rasterImageDecoder.d.ts.map