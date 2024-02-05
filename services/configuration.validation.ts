import { Ibackend } from "./types";

function validateBackendConfig({ baseUrl, path, method, params, authType, header, data }: Ibackend) {
    if (!baseUrl) {
        const error = new Error();
        error.message = "Missing Base URL in backend configuration, It must be provided.";
        error.name = "BAD_BASE_URL";
        throw error;
    }
    if (!path) {
        const error = new Error();
        error.message = "Missing path in backend configuration, It must be provided."
        error.name = "BAD_PATH";
        throw error;
    }
    if (!authType) {
        const error = new Error();
        error.message = "Missing authentication type in backend configuration, It must be provided."
        error.name = "BAD_AUTH_TYPE";
        throw error;
    }
    if (method === "GET" && data) {
        const error = new Error();
        error.message = "Method GET can not have body."
        error.name = "METHOD_NOT_ALLOWED";
        throw error;
    }
}
export default validateBackendConfig;