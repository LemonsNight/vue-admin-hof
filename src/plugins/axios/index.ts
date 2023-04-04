import { axiosResponse, BASE_URL, TIMEOUT } from "@/plugins/axios/config";
import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosRequestHeaders,
} from "axios";
import { usePermissionsStoreWithOut } from "@/stores/modules/permissions";
const service: AxiosInstance = axios.create({
  baseURL: BASE_URL[import.meta.env.VITE_APP_BASE_API],
  timeout: TIMEOUT,
});
// 请求前
service.interceptors.request.use((config) => {
  const { token } = usePermissionsStoreWithOut();
  if (token) {
    (config?.headers as AxiosRequestHeaders)["access_token"] = token;
  }
  if (config.method === "get" && config.params) {
    config.paramsSerializer = (params) => {
      return "";
    };
  }
  return config;
});
// 请求后
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return axiosResponse(response);
  },
  (error: AxiosError) => {
    console.log(error);
    return error;
  }
);

export { service };
