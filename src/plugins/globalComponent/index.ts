import { Icon } from "@/components/Icon";
import type { App } from "vue";

import { VMenu } from "@/components/ContextMenu";

export const setupGlobCom = (app: App<Element>): void => {
  app.component("Icon", Icon);
  app.use(VMenu);
};
