import { defineStore } from "pinia";
import { pinia } from "@/stores";
import { getMenuList } from "@/plugins/axios/modules/auth";
import { addAuthRouter } from "@/router/setupRouter";

export const useGlobalDataStore = defineStore({
  id: "globalDataStore",
  state: () => ({
    tagRoute: new Map(),
    menuList: [],
    beforeResolveEvents: {},
  }),
  getters: {
    getTagList: (state) => Object.fromEntries(state.tagRoute),
    combinationMenuList: (state) => [
      {
        id: "1",
        meta: {
          title: "工作台",
          icon: "ic:round-maps-home-work",
        },
        path: "/",
      },
      ...state.menuList,
    ],
  },
  actions: {
    setTagRoute(key, value) {
      this.tagRoute.set(key, value);
    },
    setMenuList(menu: []) {
      this.menuList = menu;
      addAuthRouter(menu);
    },
    getMenuList() {
      return getMenuList().then((data) => {
        this.setMenuList(data);
      });
    },
    pushBeforeResolveEvents(key, value) {
      this.beforeResolveEvents[key] = value;
    },
  },
  persist: {
    enabled: true,
    strategies: [{ paths: ["menuList"] }],
  },
});

export const useGlobalDataStoreWithOut = () => useGlobalDataStore(pinia);
