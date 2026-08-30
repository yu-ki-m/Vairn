export declare const rawCredentialDigest: (rawCredential: string) => string;
export interface ClaimBoundCredentialFingerprintInput {
    rawCredential: string;
    issuer: string;
    clientId: string;
    subject: string;
    jti: string;
}
/**
 * Fingerprints both validated claims and the raw credential digest.  Including
 * the raw digest makes a same-claims token refresh a different credential.
 */
export declare const fingerprintClaimBoundCredential: ({ rawCredential, issuer, clientId, subject, jti }: ClaimBoundCredentialFingerprintInput) => string;
//# sourceMappingURL=credentialFingerprint.d.ts.map