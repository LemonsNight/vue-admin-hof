<script lang="tsx">
import { computed, defineComponent, toRefs, unref, watch } from "vue";
import { ElMenu, useNamespace } from "element-plus";
import { useConfigStoreWithOut } from "@/stores/modules/config";
import type { MenuItemsType } from "@/types/menu";
import type { PropType } from "vue";
import { renderMenuItem } from "@/components/Menu/utils/renderMenuItem";
import { useWindowSize, useThrottleFn } from "@vueuse/core";
const configStore = useConfigStoreWithOut();
const ns = useNamespace("base-menu");
const { width } = useWindowSize();
const throttledFn = useThrottleFn((v) => {
  configStore.$patch({
    menuCollapse: v <= 768,
  });
}, 300);
export default defineComponent({
  name: "BaseMenu",
  props: {
    menuItemList: {
      type: Array as PropType<MenuItemsType[]>,
      default: () => [],
    },
    keyObject: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { menuItemList } = toRefs(props);
    const menu = computed(() =>
      Array.isArray(unref(menuItemList)) ? unref(menuItemList) : []
    );
    watch(width, (v) => {
      throttledFn(v);
    });
    return () => (
      <>
        <ElMenu
          class={ns.b()}
          // default-active="1"
          collapse={configStore.menuCollapse}
          collapse-transition={false}
        >
          {renderMenuItem(unref(menu))}
        </ElMenu>
      </>
    );
  },
});
</script>
