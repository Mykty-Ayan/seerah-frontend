import axios, { AxiosRequestConfig } from "axios";
import { getToken, setToken, getUserId } from "../context/AuthContext";
import config from "../config";
import { refreshToken } from "../services/authService";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let refreshSubscribers: any[] = [];

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: any) => {
  refreshSubscribers.push(callback);
};

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

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check for 401 or 403 status codes
    if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        const userId = getUserId();
        if (userId) {
          try {
            const newToken = await refreshToken({ user_id: userId });
            setToken(newToken);
            onRefreshed(newToken);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          } finally {
            isRefreshing = false;
          }
        }
      }

      const retryOriginalRequest = new Promise((resolve) => {
        addRefreshSubscriber((token: string) => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          resolve(apiClient(originalRequest));
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  }
);

const request = (config: AxiosRequestConfig & { requiresAuth?: boolean }) => {
  return apiClient(config);
};

export default request;
