import { APP_PATHS } from "@routes/app-paths";
import axios from "axios";
import { SESSION_TOKEN } from "src/global/constants";
import { decodeUserToken } from "src/global/decode-user-token";

export const api = axios.create({
  baseURL: "/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(SESSION_TOKEN);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const accessToken = localStorage.getItem(SESSION_TOKEN);

    if (accessToken) {
      const decodedToken = decodeUserToken(accessToken);

      if (decodedToken) {
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          localStorage.removeItem(SESSION_TOKEN);
          window.location.href = APP_PATHS.Login;
        }
      }
    }

    return Promise.reject(error);
  },
);
