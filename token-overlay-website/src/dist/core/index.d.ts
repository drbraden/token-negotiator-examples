interface FilterInterface {
    [key: string]: any;
}
export declare const filterTokens: (decodedTokens: any, filter: FilterInterface) => any;
export declare const readTokens: (itemStorageKey: any) => any;
export declare const decodeTokens: (rawTokens: any, tokenParser: any, unsignedTokenDataName: string) => any;
export declare const openOutletIframe: (tokensOrigin: any) => Promise<unknown>;
interface GetTokenInterface {
    filter: any;
    tokensOrigin: any;
    itemStorageKey: any;
    tokenParser: any;
    unsignedTokenDataName: any;
}
export declare const storeMagicURL: (tokens: any, itemStorageKey: string) => void;
export declare const readMagicUrl: (tokenUrlName: string, tokenSecretName: string, tokenIdName: string, itemStorageKey: string) => any;
export declare const ethKeyIsValid: (ethKey: any) => boolean;
export declare const validateUseEthKey: (endPoint: string, data: any) => Promise<any>;
export declare const getUnpredictableNumber: (endPoint: string) => Promise<any>;
export declare const getChallengeSigned: (tokenIssuer: any) => Promise<any>;
export declare const connectMetamaskAndGetAddress: () => Promise<any>;
export declare const getTokenProof: (unsignedToken: any, tokenIssuer: any) => Promise<unknown>;
export declare const signNewChallenge: (unEndPoint: string) => Promise<{
    address: string;
    expiry: any;
    domain: any;
    randomness: any;
    signature: string;
    UN: any;
}>;
export declare const signMessageWithBrowserWallet: (message: any) => Promise<string>;
export declare const rawTokenCheck: (unsignedToken: any, tokenIssuer: any) => Promise<unknown>;
interface GetTokenInterface {
    filter: any;
    tokensOrigin: any;
}
export declare const getTokens: (config: GetTokenInterface) => Promise<unknown>;
export declare const getRawToken: (unsignedToken: any, tokenIssuer: any) => {} | null | undefined;
export {};
