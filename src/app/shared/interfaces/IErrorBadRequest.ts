/* eslint-disable @typescript-eslint/no-empty-interface */
export interface ErrorBadRequest {
    headers: Headers;
    status: number;
    statusText: string;
    url: string;
    ok: boolean;
    name: string;
    message: string;
    error: Error;
}

export interface Error {
    item: boolean;
    isSuccess: boolean;
    lstError: string[];
    ticket: string;
    clientName: string;
    userName: string;
    serverName: string;
    resultado: number;
}

export interface Headers {
    normalizedNames: NormalizedNames;
    lazyUpdate: null;
}

export interface NormalizedNames {}
