// 权限 Permissions
import { defineStore } from "pinia";
import { pinia } from "@/stores";
import { BASE_TOKEN } from "@/plugins/axios/config";
import type { permissionState } from "@/stores/types/permissions";
import { replaceRouter } from "@/router/setupRouter";
// import router from "@/router";
export const usePermissionsStore = defineStore({
  id: "permissionsConfig",
  state: (): permissionState => ({
    token: "",
    routerList: [],
    permissions: [],
  }),
  actions: {
    clearPermissions() {
      this.token = "";
      this.routerList = [];
      this.permissions = [];
      replaceRouter();
      window.location.reload();
    },
    setPermissions(data: string | null) {
      this.token = data;
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
