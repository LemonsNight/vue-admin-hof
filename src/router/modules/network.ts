import type { RouteRecordRaw } from "vue-router";
import Layout from "@/components/Layout/Layout";

const network: RouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*",
    name: "Network",
    meta: { title: "网页异常" },
    component: Layout,
    redirect: "/404",
    children: [
      {
        path: "404",
        name: "404",
        component: () => import("@/views/Network/404.vue"),
        meta: { title: "404", disablePermissions: false },
      },
      {
        path: "403",
        name: "403",
        component: () => import("@/views/Network/403.vue"),
        meta: { title: "403", disablePermissions: false },
      },
      {
        path: "500",
        name: "500",
        component: () => import("@/views/Network/500.vue"),
        meta: { title: "500", disablePermissions: false },
      },
    ],
  },
];

export { network };
