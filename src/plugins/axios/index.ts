import { axiosResponse, BASE_URL, TIMEOUT } from "@/plugins/axios/config";
import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
const service: AxiosInstance = axios.create({
  baseURL: BASE_URL[import.meta.env.VITE_APP_BASE_API],
  timeout: TIMEOUT,
});
// 请求前
service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});
// 请求后
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return axiosResponse(response);
  },
  (error: AxiosError) => {
    return error;
  }
);

export { service };
