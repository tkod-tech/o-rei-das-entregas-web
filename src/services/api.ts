import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-o-rei-das-entregas.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authorizationToken");
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
})