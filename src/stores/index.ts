// https://seb-l.github.io/pinia-plugin-persist/#vue3
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import type { App } from "vue";
const pinia = createPinia();
pinia.use(piniaPluginPersist);

export const setupStore = (app: App<Element>) => {
  app.use(pinia);
};
export { pinia };
