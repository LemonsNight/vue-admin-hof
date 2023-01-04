import { createApp } from "vue";
import { setupStore } from "@/stores";
import App from "./App.vue";
import router from "./router";
// 初始化
import { setupGlobCom } from "@/plugins";
import { useInitSystem } from "@/hooks/web/useInitSystem";

const { debuggerFn } = useInitSystem();

function initSystem() {
  // 正式环境防止小白调试
  debuggerFn();
}

function setupAll() {
  const app = createApp(App);
  // pinia
  setupStore(app);
  // 全局组件
  setupGlobCom(app);
  // 路由
  app.use(router);
  // 初始化模板
  app.mount("#app");
}

// 初始化注册列表
setupAll();
// 初始化网站生态
initSystem();
