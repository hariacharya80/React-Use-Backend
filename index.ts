import validateBackendConfig from "./internal/configuration.validation";
import CurrentConfig from "./internal/current.config";
import { Ibackend } from "./internal/types"

const configureBackend = function ({ baseUrl, path, params, authType, header, data }: Ibackend) {
    validateBackendConfig({ baseUrl, path, params, authType, header, data });
    return { success: true, message: "Backend configuration saved successfully." }
}

const makeBackendCall = function () {
    const { calls } = CurrentConfig();
    if (calls.length === 0) {
        const error = new Error();
        error.message = "No backend calls configured.";
        error.name = "NoBackendCalls"
        throw error;
    }
    return { success: true, message: "Backend response received successfully." }
}

const useBackend = {
    configure: configureBackend,
    call: makeBackendCall
}

export default useBackend;