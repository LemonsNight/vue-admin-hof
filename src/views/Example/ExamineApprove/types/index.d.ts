import type { IconTypes } from "@/components/Icon";

export interface MenuConfigType {
  icon: IconTypes;
  title: "审批人" | "抄送人" | "条件分支";
  type: 1 | 2 | 3;
  id?: number;
}
