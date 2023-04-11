import type { RouteRecordRaw } from "vue-router";

const blog: RouteRecordRaw[] = [
  {
    path: "/blog",
    name: "Blog",
    meta: { title: "博客" },
    redirect: "/blog/docList",
    children: [
      {
        path: "docList",
        name: "ocList",
        component: () => import("@/views/Docs/DocsList.vue"),
        meta: { title: "列表" },
      },
      {
        path: "DocDetail",
        name: "DocDetail",
        component: () => import("@/views/Docs/DocsDetail.vue"),
        meta: { title: "详情" },
      },
    ],
  },
];

export { blog };
