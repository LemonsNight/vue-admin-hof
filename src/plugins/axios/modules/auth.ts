import { service } from "@/plugins/axios";
import { auth } from "@/plugins/axios/api";

export type PostLoginType = {
  username: string;
  password: string;
};
// 登录
export const postLogin = async (data: PostLoginType): Promise<string> => {
  const res = await service({
    method: "post",
    data,
    url: auth.login,
  });
  return res && res.data;
};

export const getMenuList = async (): Promise<any[]> => {
  const res = await service({
    url: auth.getMenuList,
  });
  return res && res.data;
};
