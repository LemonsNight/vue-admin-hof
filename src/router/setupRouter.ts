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
      .filter(
        ({ path, name, meta, component }) => name && path && meta && component
      )
      .map(({ path, name, component, meta, redirect, children }) => ({
        path,
        name,
        meta,
        component: component === "#" ? Layout : modules[`/src${component}`],
        redirect,
        children:
          Array.isArray(children) && children.length
            ? getRouteList(children)
            : [],
      }));
  }
  return [];
};
// 增加路由
export const addAuthRouter = function (menu: RouteRecordRaw[]) {
  getRouteList(menu).forEach((item) => {
    router.addRoute(item);
  });
};
