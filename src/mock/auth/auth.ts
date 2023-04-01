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
            name: "ChatGPT",
            path: "/chatGPT",
            meta: { title: "ChatGPT", icon: "material-symbols:chat" },
            redirect: "/ChatGPT/chatGPTDemo",
            id: "20",
            component: "#",
            children: [
              {
                id: "33",
                meta: { title: "ChatGPT", icon: "material-symbols:chat" },
                name: "chatGPTDemo",
                path: "/chatGPT/chatGPTDemo",
                component: "/views/ChatGPT/ChatGPT.vue",
              },
              {
                id: "333",
                meta: { title: "BingAI", icon: "mdi:microsoft-edge" },
                name: "BingAI",
                path: "/chatGPT/BingAI",
                component: "/views/ChatGPT/BingAI.vue",
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
