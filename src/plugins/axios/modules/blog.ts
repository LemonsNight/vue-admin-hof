import config from "@/config/github";
import AV from "leancloud-storage";
import { service } from "@/plugins/axios";

const { username, repository, token } = config;
const GITHUB_API = "https://api.github.com/repos";
const blog = `${GITHUB_API}/${username}/${repository}`;
const access_token = `token ${token.join("")}`;
export const githubFetch = async (url): Promise<string> => {
  const res = await service({
    method: "get",
    url,
    headers: {
      Authorization: access_token,
    },
  });
  return res && res.data;
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
