import Mock, { Random } from "mockjs";
import type { MockMethod } from "vite-plugin-mock";
import { Blog } from "@/plugins/axios/api";

export default [
  {
    url: Blog.menu,
    method: "get",
    response: () => {
      return {
        code: 0,
        msg: "success",
        data: [
          { label: "首页", icon: "mdi:heat-index" },
          { label: "归档", icon: "material-symbols:attach-file" },
          { label: "分类", icon: "carbon:classification" },
          { label: "标签", icon: "material-symbols:auto-label" },
          { label: "书单", icon: "material-symbols:menu-book-outline-sharp" },
          { label: "灵感", icon: "game-icons:inspiration" },
          { label: "友链", icon: "icon-park:friends-circle" },
          { label: "关于", icon: "mdi:about" },
        ].map((i, id) => ({ ...i, id })),
      };
    },
  },
] as MockMethod[];
