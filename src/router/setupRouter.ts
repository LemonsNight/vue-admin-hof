import type { Router } from "vue-router";
import { usePermissionsStoreWithOut } from "@/stores/modules/permissions";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// 全局前置守卫
const whiteList = ["/login"];
const beforeEach = function (router: Router) {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    const { token } = usePermissionsStoreWithOut();
    if (whiteList.includes(to.path)) {
      next();
    } else {
      token ? next() : next("/login");
    }
  });
};
// 全局解析守卫
const beforeResolve = function (router: Router) {
  router.beforeResolve(async (to) => {});
};
// 全局后置钩子
const afterEach = function (router: Router) {
  router.afterEach((to, from) => {
    NProgress.done();
  });
};

const setupRouter = function () {
  return {
    beforeEach,
    beforeResolve,
    afterEach,
  };
};

export { setupRouter };
