import type { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
const BASE_URL = {
  base: "http://api_test.kxblive.com",
  dev: "http://api_test.kxblive.com",
  uat: "http://api_uat.kxblive.com",
  pre: "https://api-pre.kxblive.com",
  pro: "http://api.kxblive.com",
};

const BASE_TOKEN = {
  base: "BASE-TOKEN",
  dev: "DEV-TOKEN",
  uat: "UAT-TOKEN",
  pre: "PRE-TOKEN",
  pro: "PRO-TOKEN",
};

const TIMEOUT = 1000 * 60;

const axiosResponse = (response: AxiosResponse) => {
  const { data } = response;
  const { code, msg } = data;
  if (response.config.responseType === "blob") {
    return response;
  }
  switch (code) {
    case 0:
      return data;
    case 401:
      break;
    default:
      ElMessage.error(msg);
      return Promise.reject(new Error(JSON.stringify(data)));
  }
};

export { BASE_URL, TIMEOUT, BASE_TOKEN, axiosResponse };
