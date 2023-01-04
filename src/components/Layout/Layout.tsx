import { defineComponent, onBeforeUnmount, onMounted, ref } from "vue";
import { Setting } from "./components";
import { RouterView } from "vue-router";
import { useDebounceFn } from "@vueuse/core";
import BaseLayout from "./components/Layout/BaseLayout.js";
import BaseLayoutV2 from "./components/LayoutV2/BaseLayout.vue";
import { useConfigStoreWithOut } from "@/stores/modules/config";

const configStore = useConfigStoreWithOut();
export default defineComponent({
  name: "Layout",
  setup() {
    const key = ref(Date.now());
    const updateKey = useDebounceFn(() => {
      key.value = Date.now();
    }, 200);
    onMounted(() => {
      window.addEventListener("resize", updateKey);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateKey);
    });
    const getLayout = () => {
      switch (configStore.layoutMode) {
        case 1:
          return (
            <BaseLayout>
              {{ default: () => <RouterView></RouterView> }}
            </BaseLayout>
          );
        case 2:
          return (
            <BaseLayoutV2>
              {{ default: () => <RouterView></RouterView> }}
            </BaseLayoutV2>
          );
        default:
          return "";
      }
    };
    return () => (
      <>
        {getLayout()}
        <Setting key={key.value} />
      </>
    );
  },
});
