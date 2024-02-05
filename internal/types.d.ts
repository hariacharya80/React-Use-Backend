export interface Ibackend {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH'
    baseUrl: string;
    header: object;
    path: string;
    params?: object;
    data?: object;
    authType: "none" | "JSON_TOKEN" | "COOKIE" | 'SECURE_COOKIE'
}