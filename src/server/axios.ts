import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-onecloud.multicloud.tivit.com/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Authorization",
  },
});
