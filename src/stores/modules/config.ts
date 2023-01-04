import { defineStore } from "pinia";
import { pinia } from "@/stores";
import { isObject } from "@vueuse/core";
interface StateType {
  layoutMode?: 1 | 2 | 3; // 布局切换
  menuShow?: boolean; // 是否显示菜单栏
  menuCollapse?: boolean; // 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
}
export const useConfigStore = defineStore("storeConfig", {
  state: (): StateType => ({
    layoutMode: 1,
    menuShow: false,
    menuCollapse: false,
  }),
  actions: {
    setLayoutMode(data: StateType["layoutMode"]) {
      this.layoutMode = data;
    },
    setStateAttribute(data: StateType) {
      if (isObject(data)) {
        for (const [k, v] of Object.entries(data)) {
          this[k] = v;
        }
      }
    },
  },
  persist: {
    enabled: true,
  },
});

export const useConfigStoreWithOut = () => useConfigStore(pinia);
