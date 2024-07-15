import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../context/AuthContext";
import config from "../config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    if ((config as any).requiresAuth) {
      const token = getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const request = (config: AxiosRequestConfig & { requiresAuth?: boolean }) => {
  return apiClient(config);
};

export default request;
