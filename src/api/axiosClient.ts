import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
