export const ENDPOINT_URL = "https://lovetavern.ai"
export const ENDPOINT_URL_TEST = "https://test.api.lovetavern.ai"

const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
    let [resource, config ] = args;
    // request interceptor here
    const response = await originalFetch(resource, config);
    // response interceptor here
    return response;
};
