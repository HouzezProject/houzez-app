import axios from "axios";

const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000
});

// Add a request interceptor
service.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
service.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const get = (url: string) => service.get(url);

export const post = (url: string, data: any) => service.post(url, data);

export const put = (url: string, data: any) => service.put(url, data);

export const patch = (url: string, data: any) => service.patch(url, data);

export const del = (url: string) => service.delete(url);
