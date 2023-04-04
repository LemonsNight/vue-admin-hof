//                                                          _ooOoo_
//                                                         o8888888o
//                                                         88" . "88
//                                                         (| -_- |)
//                                                          O\ = /O
//                                                      ____/`---'\____
//                                                    .   ' \\| |// `.
//                                                     / \\||| : |||// \
//                                                   / _||||| -:- |||||- \
//                                                     | | \\\ - /// | |
//                                                   | \_| ''\---/'' | |
//                                                    \ .-\__ `-` ___/-. /
//                                                 ___`. .' /--.--\ `. . __
//                                              ."" '< `.___\_<|>_/___.' >'"".
//                                             | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                                               \ \ `-. \_ __\ /__ _/ .-` / /
//                                       ======`-.____`-.___\_____/___.-`____.-'======
//                                                          `=---='
//
//                                       .............................................
//                                              佛祖保佑             多多面试
//                                      -----------------------------------------------
//                                                就算这一切轰然倒塌，我也绝不会倒

import { createApp } from "vue";
import { setupStore } from "@/stores";
import App from "./App.vue";
import router from "./router";
// 初始化
import { setupGlobCom } from "@/plugins";
import { useInitSystem } from "@/hooks/web/useInitSystem";

const { initRoute } = useInitSystem();

function setupAll() {
  const app = createApp(App);
  // pinia
  setupStore(app);
  // 全局组件
  setupGlobCom(app);
  // 初始化路由
  initRoute();
  // 路由
  app.use(router);
  // 初始化模板
  app.mount("#app");
}

// 初始化注册列表
setupAll();
