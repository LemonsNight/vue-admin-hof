import type { RouteRecordRaw } from "vue-router";
import Layout from "@/components/Layout/Layout";

const example: RouteRecordRaw[] = [
  {
    path: "/example",
    name: "Example",
    meta: { title: "示例" },
    component: Layout,
    children: [
      {
        path: "form",
        name: "Form",
        component: () => import("@/views/Example/Form/Form.vue"),
        meta: { title: "表单示例" },
      },
      // {
      //   path: "ganttChart",
      //   name: "GanttChart",
      //   component: () => import("@/views/Example/GanttChart/GanttChart.vue"),
      //   meta: { title: "甘特图" },
      // },
    ],
  },
];

export { example };
