import Icon from "./src/Icon.vue";
import type { VNode } from "vue";
import { h } from "vue";

const useIcon = (props: IconTypes): VNode => {
  return h(Icon, props);
};
export { Icon, useIcon };

export declare interface IconTypes {
  size?: number;
  color?: string;
  icon: string;
}
