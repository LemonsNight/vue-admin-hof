import type { RouteRecordRaw } from "vue-router";
import Layout from "@/components/Layout/Layout";

const example: RouteRecordRaw[] = [
  {
    path: "/example",
    name: "Example",
    meta: { title: "示例" },
    component: Layout,
    redirect: "/example/form",
    children: [
      {
        path: "form",
        name: "Form",
        component: () => import("@/views/Example/Form/Form.vue"),
        meta: { title: "表单示例" },
      },
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/Example/Table/Table.vue"),
        meta: { title: "表格示例" },
      },
      {
        path: "examineApprove",
        name: "ExamineApprove",
        component: () =>
          import("@/views/Example/ExamineApprove/ExamineApprove.vue"),
        meta: { title: "审批流" },
      },
    ],
  },
];

export { example };
