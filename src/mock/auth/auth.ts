import Mock, { Random } from "mockjs";
import type { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/base-api/sys/menu/list",
    method: "get",
    response: () => {
      return {
        code: 0,
        msg: "success",
        data: Mock.mock({
          "data|10": [
            {
              id: Random.id(),
              name: Random.name(),
              pid: Random.guid(),
            },
          ],
        }),
      };
    },
  },
] as MockMethod[];
