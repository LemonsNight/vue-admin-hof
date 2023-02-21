import type { RouteRecordRaw } from "vue-router";
import Layout from "@/components/Layout/Layout";

const network: RouteRecordRaw[] = [
  {
    path: "/network",
    name: "Network",
    meta: { title: "网页异常" },
    component: Layout,
    children: [
      {
        path: "404",
        name: "404",
        component: () => import("@/views/Network/404.vue"),
        meta: { title: "登录", disablePermissions: false },
      },
      {
        path: "403",
        name: "403",
        component: () => import("@/views/Network/403.vue"),
        meta: { title: "登录", disablePermissions: false },
      },
      {
        path: "500",
        name: "500",
        component: () => import("@/views/Network/500.vue"),
        meta: { title: "登录", disablePermissions: false },
      },
    ],
  },
];

export { network };
