import axios from "axios";
import router from "next/router";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_HOST,
  timeout: 5000
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = { Authorization: token };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.message === "Network Error" || error.response?.status >= 500) {
      router.push({ pathname: "/error", query: { errorcode: 500 } });
    }

    if (error.response?.status === 403 && error.response.data === "login token is not valid") {
      router.push({ pathname: "/hint", query: { msg: "You need sign in first." } });
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
