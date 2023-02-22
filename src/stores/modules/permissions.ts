// 权限 Permissions
import { defineStore } from "pinia";
import { pinia } from "@/stores";
import type { permissionState } from "@/stores/types/permissions";
import { BASE_TOKEN } from "@/plugins/axios/config";
import { getMenuList } from "@/plugins/axios/modules/auth";

export const usePermissionsStore = defineStore({
  id: "permissionsConfig",
  state: (): permissionState => ({
    token: "",
    routerList: [],
    permissions: [],
  }),
  actions: {
    setPermissions(data: string | null) {
      this.token = data;
      this.getMenuList();
    },
    getMenuList() {
      getMenuList().then((data) => {
        console.log(data);
      });
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: BASE_TOKEN[import.meta.env.VITE_APP_BASE_API],
        paths: ["token"],
      },
    ],
  },
});

export const usePermissionsStoreWithOut = () => usePermissionsStore(pinia);
