import { apiUrl } from "@src/data/constants";
import { useLoaderStore } from "@src/libs/zustand";

async function apiCall(path = "/", body = {}, method = "GET") {
    const { setLoading } = useLoaderStore.getState();
    const options = {
        method,
        headers: {},
    };

    if (method !== "GET") {
        options.body = body instanceof FormData ? body : JSON.stringify(body);
        if (!(body instanceof FormData)) {
            options.headers["Content-Type"] = "application/json";
        }
    }

    try {
        setLoading(true);
        const res = await fetch(apiUrl + path, options);
        const result = await res.json();
        setLoading(false);
        if (res.ok) return result;
        throw result;
    } catch (error) {
        setLoading(false);
        throw error;
    }
}

const getFetch = (path) => apiCall(path);
const postFetch = (path, body) => apiCall(path, body, "POST");
const patchFetch = (path, body) => apiCall(path, body, "PATCH");
const putFetch = (path, body) => apiCall(path, body, "PUT");
const deleteFetch = (path, body) => apiCall(path, body, "DELETE");

export { getFetch, postFetch, patchFetch, putFetch, deleteFetch };
