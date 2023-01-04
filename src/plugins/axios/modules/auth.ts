import { service } from "@/plugins/axios";
import { auth } from "@/plugins/axios/api";

// 登录
export const postLogin = async (data: {
  username: string;
  password: string;
}): Promise<string> => {
  const res = await service({
    method: "post",
    data,
    url: auth.login,
  });
  return res.data;
};
