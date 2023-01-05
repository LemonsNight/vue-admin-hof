import type { MenuConfigType } from "../types";
const initApprove = (): MenuConfigType => ({
  icon: { icon: "ep:stamp", color: "var(--approve--color)" },
  title: "审批人",
  type: 1,
});

const initCopy = (): MenuConfigType => ({
  icon: { icon: "ep:promotion", color: "var(--copy--color)" },
  title: "抄送人",
  type: 2,
});

const initBranch = (): MenuConfigType => ({
  icon: { icon: "icon-park-twotone:branch-one", color: "var(--copy--color)" },
  title: "条件分支",
  type: 3,
});

export const getInitTypeConfig = (type: MenuConfigType["type"]) => {
  switch (type) {
    case 1:
      return initApprove();
    case 2:
      return initCopy();
    case 3:
      return initBranch();
    default:
      return initApprove();
  }
};

export const CardConfig = (type: MenuConfigType["type"]) => {
  switch (type) {
    case 1:
      return {
        theme: "approve",
      };
    case 2:
      return {
        theme: "copy",
      };
    default:
      return {
        theme: "initiate",
      };
  }
};

export const MenuConfig: MenuConfigType[] = [
  initApprove(),
  initCopy(),
  initBranch(),
];
