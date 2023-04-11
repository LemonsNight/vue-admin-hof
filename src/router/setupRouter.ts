import "nprogress/nprogress.css";
import router from "@/router";
import Layout from "@/components/Layout/Layout";
import type { RouteRecordRaw } from "vue-router";
// 重置路由
export const replaceRouter = function () {};
const modules = import.meta.glob("/src/views/**/*.{vue,tsx}");

const getRouteList = (menu: RouteRecordRaw[]) => {
  if (Array.isArray(menu)) {
    return menu
      .filter(({ path, name, meta }) => name && path && meta)
      .map(({ path, name, component, meta, redirect, children }) => {
        const t = {
          path,
          name,
          meta,
          redirect,
          children:
            Array.isArray(children) && children.length
              ? getRouteList(children)
              : [],
        };
        if (component) {
          t.component =
            component === "#" ? Layout : modules[`/src${component}`];
        }
        return t;
      });
  }
  return [];
};
// 增加路由
export const addAuthRouter = function (menu: RouteRecordRaw[]) {
  getRouteList(menu).forEach((item) => {
    router.addRoute(item);
  });
};
