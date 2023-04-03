import { defineComponent } from "vue";
import { ElScrollbar, useNamespace } from "element-plus";
import "./BaseLayout.scss";
import BaseHeader from "./BaseHeader.vue";
import BaseFooter from "./BaseFooter.vue";
import BaseNav from "./BaseNav.vue";
import BaseTabsMenu from "./BaseTabsMenu.vue";
import { useConfigStoreWithOut } from "@/stores/modules/config";

const configStore = useConfigStoreWithOut();
export default defineComponent({
  name: "BaseLayout",
  setup(props, context) {
    const ns = useNamespace("base-layout");
    const { slots } = context;
    return () => (
      <>
        {/*<ContextMenu />*/}
        <main class={[ns.b()]}>
          <article
            class={[
              ns.e("left"),
              configStore.menuCollapse ? "w-64px" : "w-200px",
            ]}
          >
            <ElScrollbar>
              <BaseNav />
            </ElScrollbar>
          </article>

          <article class={[ns.e("right"), "overflow-hidden"]}>
            <BaseHeader />

            <BaseTabsMenu />

            <div class={[ns.em("right", "main")]}>
              <ElScrollbar view-class={"h-full"}>
                <div class={["overflow-x-hidden", "h-full"]}>
                  {slots["default"] && slots["default"]()}
                </div>
              </ElScrollbar>
            </div>

            <BaseFooter />
          </article>
        </main>
      </>
    );
  },
});
