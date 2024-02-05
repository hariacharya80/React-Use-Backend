import { Ibackend } from "./types";

function validateBackendConfig({ baseUrl, path, params, authType, header, data }: Ibackend) {

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
}
export default validateBackendConfig;