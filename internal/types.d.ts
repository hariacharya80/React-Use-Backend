export interface Ibackend {
    baseUrl: string;
    header: object;
    path: string;
    params?: object;
    data?: object;
    authType: "none" | "JSON_TOKEN" | "COOKIE" | 'SECURE_COOKIE'
}