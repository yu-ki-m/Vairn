/**
 * Mermaid 等の図を headless Chromium（Playwright）で SVG に描画するバックエンドサービス。
 * フロントエンドのクライアントサイド描画を撤去するための土台 (US4 / FR-012a)。
 *
 * - ブラウザ／ページは遅延起動し再利用する（毎回の起動コストを避ける）。
 * - mermaid.render はページ単位で直列化する（同一ページでの同時実行衝突を避ける）。
 * - 描画結果はソースハッシュでキャッシュする。
 * - ブラウザが利用できない環境では DiagramRenderError を投げ、呼び出し側でフォールバックさせる。
 */
export declare class DiagramRenderError extends Error {
    constructor(message: string);
}
export declare class DiagramRenderService {
    private browserPromise;
    private pagePromise;
    private renderQueue;
    private readonly cache;
    private readonly mermaidScript;
    constructor(mermaidScriptPath?: string);
    renderMermaidToSvg(code: string): Promise<string>;
    private ensureBrowser;
    private ensurePage;
    private renderOnPage;
    close(): Promise<void>;
}
//# sourceMappingURL=diagramRenderService.d.ts.map