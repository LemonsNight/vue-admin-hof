import config from "@/config/github";
import { service } from "@/plugins/axios";
import { Blog } from "@/plugins/axios/api";

const { username, repository, token } = config;
const GITHUB_API = "https://api.github.com/repos";
const blog = `${GITHUB_API}/${username}/${repository}`;
const access_token = `token ${token.join("")}`;
export const githubFetch = (url): Promise<string> => {
  return service({
    method: "get",
    url,
    headers: {
      Authorization: access_token,
    },
  });
};
// 获取github个人信息
export const getUserInfo = () => {
  return service({
    url: "https://api.github.com/users/LemonsNight",
  });
};
// 获取github个人信息
export const getUserInfo = () => {
  return service({
    url: "https://api.github.com/users/LemonsNight",
  });
};
// 获取文章列表
export const queryPosts = ({
  page = 1,
  pageSize = 10,
  state = "open",
  filter = "",
}) => {
  const url = `${blog}/issues?state=${state}&page=${page}&per_page=${pageSize}${filter}`;
  return githubFetch(url);
};

// 获取博客菜单
export const getMenuList = async () => {
  const res = await service({
    method: "get",
    url: Blog.menu,
  });
  return res && res.data;
};
