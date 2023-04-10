import { handleRefreshPage } from "@/components/Layout/utils/tabEvents";

export const ContextMenuList = [
  { label: "重新加载", icon: "ep:refresh", command: handleRefreshPage },
  { label: "关闭标签页", icon: "ep:close", command: handleRefreshPage },
  {
    label: "关闭左侧标签页",
    icon: "ant-design:vertical-right-outlined",
    divided: true,
    command: handleRefreshPage,
  },
  {
    label: "关闭右侧标签页",
    icon: "ant-design:vertical-left-outlined",
    command: handleRefreshPage,
  },
  {
    label: "关闭其他标签页",
    icon: "ant-design:tag-outlined",
    divided: true,
    command: handleRefreshPage,
  },
  {
    label: "关闭全部标签页",
    icon: "ant-design:line-outlined",
    command: handleRefreshPage,
  },
].map((item) => ({
  ...item,
  divided: "divided" in item,
}));
