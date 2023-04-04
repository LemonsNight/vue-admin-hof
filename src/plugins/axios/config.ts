import type { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
const BASE_URL = {
  base: "",
  dev: "",
  uat: "",
  pre: "",
  pro: "",
};

const BASE_TOKEN = {
  base: "BASE-TOKEN",
  dev: "DEV-TOKEN",
  uat: "UAT-TOKEN",
  pre: "PRE-TOKEN",
  pro: "PRO-TOKEN",
};

const BASE_MENU = {
  base: "BASE-MENU",
  dev: "DEV-MENU",
  uat: "UAT-MENU",
  pre: "PRE-MENU",
  pro: "PRO-MENU",
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

export { BASE_URL, TIMEOUT, BASE_TOKEN, BASE_MENU, axiosResponse };
