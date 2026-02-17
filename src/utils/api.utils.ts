import axios from "axios";

import { ENV } from "./env.utils";
import { getToken, isTokenExpired } from "./token.utils";

const api = axios.create({
    baseURL: ENV.API_URL,
    timeout: 30000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token && !isTokenExpired(token)) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;