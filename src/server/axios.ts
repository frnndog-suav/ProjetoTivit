import axios from "axios";
import { SESSION_TOKEN } from "src/global/constants";

export const api = axios.create({
  baseURL: "/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar o token de autenticação
api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem(SESSION_TOKEN);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
