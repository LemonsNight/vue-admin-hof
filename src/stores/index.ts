// https://seb-l.github.io/pinia-plugin-persist/#vue3
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import type { App } from "vue";
const pinia = createPinia();

const setupStore = (app: App<Element>) => {
  pinia.use(piniaPluginPersist);
  app.use(pinia);
};

export { pinia, setupStore };
