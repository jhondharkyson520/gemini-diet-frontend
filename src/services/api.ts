import axios from "axios";

export function setupAPIClient() {
    const api = axios.create({
        baseURL: import.meta.env.VITE_projectIp
    });
    return api;
}
