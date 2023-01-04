import type { RouteRecordRaw } from "vue-router";

const user: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/Login.js"),
    meta: { title: "登录", disablePermissions: false },
  },
];

export { user };
