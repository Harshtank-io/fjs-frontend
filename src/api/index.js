import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,

  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
});

export default axiosClient;
