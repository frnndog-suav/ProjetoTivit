import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-onecloud.multicloud.tivit.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
