import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout/Layout.js";
import { user } from "@/router/modules/user";
// import { example } from "@/router/modules/example";
import { network } from "@/router/modules/network";
import NProgress from "nprogress";
import { usePermissionsStoreWithOut } from "@/stores/modules/permissions";
import { useGlobalDataStoreWithOut } from "@/stores/modules/globalData";

const whiteList = ["/login"];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Layout,
      redirect: "/work",
      children: [
        {
          path: "work",
          name: "Work",
          component: () => import("@/views/Home/Home.vue"),
          meta: {
            title: "工作台",
            icon: "ic:round-maps-home-work",
            isFixTag: true,
          },
        },
      ],
    },
    ...user,
    ...network,
  ],
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  const { token } = usePermissionsStoreWithOut();
  if (whiteList.includes(to.path)) {
    next();
  } else {
    token ? next() : next("/login");
  }
});

router.afterEach((to, from) => {
  NProgress.done();
});
router.beforeResolve(async (to) => {
  const { beforeResolveEvents } = useGlobalDataStoreWithOut();
  for (const v of Object.values(beforeResolveEvents)) {
    v(to);
  }
});

export default router;
