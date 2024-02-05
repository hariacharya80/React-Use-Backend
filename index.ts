import validateBackendConfig from "./services/configuration.validation";
import CurrentConfig from "./services/current.config";
import { Ibackend, headerOptions } from "./services/types"

const configureBackend = function ({ baseUrl, method, path, params, authType, transaction, header, data }: Ibackend) {
    validateBackendConfig({ baseUrl, method, path, params, authType, transaction, header, data });
    const { calls, setCalls } = CurrentConfig();
    const factoredParamaters: string[] = [];
    for (let key in params) {
        factoredParamaters.push(key);
        factoredParamaters.push(params[key]);
    }
    const paramsString = factoredParamaters ? `${'/' + factoredParamaters.join('/')}` : '';

    const headers: headerOptions = {
        'content-type': '',
        'authorization': '',
        'credentials': false,
    }
    if (authType === "NONE") {
        delete headers.authorization;
    }
    if (transaction) {
        headers.credentials = true;
    } else {
        headers.credentials = false;
    }


    const requestBody = data ? { ...data } : null;
    setCalls([...calls, {
        url: String(`${baseUrl}/${path}${paramsString}`),
        header: headers,
        body: requestBody ? requestBody : undefined,
    }]);
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


export default { configure: configureBackend, call: makeBackendCall };