export interface RenderTrustPolicy {
    trusted: boolean;
    allowScripts: boolean;
    allowedExternalResourceKinds: string[];
}
export declare const sanitizeUntrustedHtml: (html: string) => string;
export declare class RenderTrustPolicyService {
    private trusted;
    setTrusted(trusted: boolean): void;
    current(): RenderTrustPolicy;
    apply(html: string): string;
}
//# sourceMappingURL=renderTrustPolicy.d.ts.map