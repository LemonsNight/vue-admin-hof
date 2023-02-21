export const ContextMenuList = [
  { label: "重新加载", icon: "ep:refresh" },
  { label: "关闭标签页", icon: "ep:close" },
  {
    label: "关闭左侧标签页",
    icon: "ant-design:vertical-right-outlined",
    divided: true,
  },
  { label: "关闭右侧标签页", icon: "ant-design:vertical-left-outlined" },
  { label: "关闭其他标签页", icon: "ant-design:tag-outlined", divided: true },
  { label: "关闭全部标签页", icon: "ant-design:line-outlined" },
].map((item) => ({
  ...item,
  divided: "divided" in item,
}));
