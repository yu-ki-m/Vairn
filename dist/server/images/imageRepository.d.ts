import type { StorageAdapter } from '../storage/StorageAdapter.js';
export interface ManagedImageResource {
    imageId: string;
    workspaceId: string;
    artifactId: string;
    artifactPath: string;
    sourceHash: string;
    mimeType: string;
    width?: number;
    height?: number;
    byteSize: number;
    createdAt: string;
    status: 'ready' | 'failed';
}
export interface ImageDerivative {
    derivativeId: string;
    imageId: string;
    variant: string;
    width?: number;
    height?: number;
    artifactId: string;
    artifactPath: string;
    sourceHash: string;
    status: 'ready' | 'failed';
    generatedAt: string;
}
/**
 * 画像メタデータ（imageId→アーティファクトの対応、生成済み派生）を永続化する。
 *
 * バイナリ本体は ArtifactStore がディスクに保存するが、対応付けは従来プロセス内
 * メモリのみで、サーバ再起動で失われ画像が表示されなくなっていた。本リポジトリは
 * 既存の StorageAdapter（SQLite/PostgreSQL のパーティション）へ write-through し、
 * 読み出しはメモリキャッシュ→ストレージの順にフォールバックする。これにより
 * 再起動後も画像 URL が解決できる（FR-001/002/005）。
 */
export declare class ImageRepository {
    private readonly storage;
    private readonly workspaceId;
    private readonly images;
    private readonly derivatives;
    constructor(storage: StorageAdapter, workspaceId?: string);
    saveImage(image: ManagedImageResource): Promise<ManagedImageResource>;
    getImage(imageId: string): Promise<ManagedImageResource | undefined>;
    saveDerivative(derivative: ImageDerivative): Promise<ImageDerivative>;
    getDerivative(imageId: string, variant: string): Promise<ImageDerivative | undefined>;
    /**
     * 既知の派生を返す。StorageAdapter には prefix 一覧 API がないため、現状の唯一の
     * 呼び出し経路であるキャッシュからのベストエフォート返却に留める（再生成は
     * getOrCreate がオンデマンドで担う）。
     */
    listDerivatives(imageId: string): Promise<ImageDerivative[]>;
}
//# sourceMappingURL=imageRepository.d.ts.map