export interface Ibackend {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH'
    baseUrl: string;
    header?: object;
    path: string;
    params?: object;
    data?: object;
    authType: "NONE" | "JSON_TOKEN" | "COOKIE" | 'SECURE_COOKIE';
    transaction: boolean;
}

export interface headerOptions {
    'content-type': string;
    'authorization'?: string,
    'credentials': boolean;
}