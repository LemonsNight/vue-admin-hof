import Mock, { Random } from "mockjs";
import type { MockMethod } from "vite-plugin-mock";
import { auth } from "@/plugins/axios/api";

export default [
  {
    url: auth.getMenuList,
    method: "get",
    response: () => {
      return {
        code: 0,
        msg: "success",
        data: [
          {
            id: "3334",
            meta: { title: "博客", icon: "fa6-solid:blog" },
            name: "Blog",
            path: "/blog",
            component: "_blog",
            children: [],
          },
          {
            id: "3334",
            meta: { title: "博客", icon: "fa6-solid:blog", hideMenu: true },
            name: "Blog",
            path: "/blog",
            redirect: "/blog/docsList",
            component: "_blog",
            children: [
              {
                id: "3335",
                meta: { title: "列表", icon: "fa6-solid:blog" },
                name: "BlogList",
                path: "/blog/docsList",
                component: "/views/Docs/DocsList.vue",
              },
              {
                id: "3332",
                meta: { title: "详情", icon: "fa6-solid:blog" },
                name: "BlogDetail",
                path: "/blog/blogDetail",
                component: "/views/Docs/DocsDetail.vue",
              },
            ],
          },
          {
            name: "Example",
            path: "/example",
            meta: {
              title: "示例",
              icon: "material-symbols:component-exchange",
            },
            id: "2",
            redirect: "/example/form",
            component: "#",
            children: [
              {
                id: "3",
                meta: {
                  title: "PRO表单",
                  icon: "material-symbols:dynamic-form",
                },
                name: "Form",
                path: "/example/form",
                component: "/views/Example/Form/Form.vue",
              },
              {
                id: "4",
                meta: {
                  title: "PRO表格",
                  icon: "material-symbols:table-sharp",
                },
                name: "Table",
                path: "/example/table",
                component: "/views/Example/Table/Table.vue",
              },
            ],
          },
          {
            id: "5",
            meta: {
              title: "外链",
              icon: "ic:baseline-insert-link",
            },
            children: [
              {
                id: "6",
                meta: { title: "Vue", icon: "vscode-icons:file-type-vue" },
                path: "https://vuejs.org/",
              },
              {
                id: "7",
                meta: { title: "ElementUI", icon: "ep:eleme" },
                path: "https://element-plus.org/zh-CN/#/zh-CN",
              },
              {
                id: "8",
                meta: { title: "Iconify", icon: "line-md:iconify1" },
                path: "https://icon-sets.iconify.design/",
              },
              {
                id: "20",
                meta: {
                  title: "Vue3后台模板",
                  icon: "logos:vuetifyjs",
                },
                path: "https://kailong110120130.gitee.io/vue-element-plus-admin",
              },
            ],
          },
        ],
      };
    },
  },
  {
    url: auth.login,
    method: "post",
    response: () => {
      return {
        code: 0,
        msg: "success",
        data: Random.guid(),
      };
    },
  },
] as MockMethod[];
