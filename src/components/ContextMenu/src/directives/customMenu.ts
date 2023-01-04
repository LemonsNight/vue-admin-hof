// 自定义菜单
// https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
import type { App, ObjectDirective } from "vue";
import { useWindowSize } from "@vueuse/core";


const VMenu: ObjectDirective = {
  mounted(el) {
    el.oncontextmenu = function (e: PointerEvent) {
      e.preventDefault();
      if ("_customContextmenu" in window && e) {
        const { width } = useWindowSize();
        if (width.value - e.x < 300) {
          window._customContextmenu.x = e.x - 300;
          window._customContextmenu.y = e.y;
        } else {
          window._customContextmenu.x = e.x;
          window._customContextmenu.y = e.y;
        }
      }
    };
  },
};

export default {
  install(app: App) {
    app.directive("menu", VMenu);
  },
};
