// 强制关闭生产环境调试
// https://cn.vitejs.dev/guide/env-and-mode.html#env-variables
import { useGlobalDataStoreWithOut } from "@/stores/modules/globalData";
import { addAuthRouter } from "@/router/setupRouter";

const debuggerFn = function () {
  if (import.meta.env.PROD) {
    requestAnimationFrame(debuggerFn);
  }
};

const initRoute = function () {
  const globDataStore = useGlobalDataStoreWithOut();
  addAuthRouter(globDataStore.menuList);
};

const useInitSystem = function () {
  return {
    debuggerFn,
    initRoute,
  };
};

export { useInitSystem };
