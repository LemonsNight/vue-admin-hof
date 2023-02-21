<script lang="tsx">
import { computed, defineComponent, toRefs, unref } from "vue";
import { ElMenu, useNamespace } from "element-plus";
import { useConfigStoreWithOut } from "@/stores/modules/config";
import type { MenuItemsType } from "@/types/menu";
import type { PropType } from "vue";
import { renderMenuItem } from "@/components/Menu/utils/renderMenuItem";
const configStore = useConfigStoreWithOut();
const ns = useNamespace("base-menu");

export default defineComponent({
  name: "BaseMenu",
  props: {
    menuItemList: {
      type: Array as PropType<MenuItemsType[]>,
      default: () => [
        {
          title: "工作台",
          icon: "ic:round-maps-home-work",
        },
        {
          title: "组件",
          icon: "ic:round-maps-home-work",
          children: [
            {
              title: "PRO表单",
              icon: "ic:round-maps-home-work",
            },
            {
              title: "PRO表格",
              icon: "ic:round-maps-home-work",
            },
          ],
        },
      ],
    },
  },
  setup(props) {
    const { menuItemList } = toRefs(props);
    const menu = computed(() => {
      if (Array.isArray(unref(menuItemList))) {
        return unref(menuItemList).map((item, index) => ({
          ...item,
          index: String(index),
        }));
      }
      return [];
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
