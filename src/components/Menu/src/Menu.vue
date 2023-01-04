<script lang="tsx">
import { defineComponent } from "vue";
import { ElMenu, ElMenuItem, useNamespace } from "element-plus";
import { Icon } from "@/components/Icon";
import { useConfigStoreWithOut } from "@/stores/modules/config";

const configStore = useConfigStoreWithOut();
const ns = useNamespace("base-menu");
export default defineComponent({
  name: "BaseMenu",
  setup() {
    return () => (
      <>
        <ElMenu
          class={ns.b()}
          default-active="1"
          collapse={configStore.menuCollapse}
          collapse-transition={false}
        >
          <ElMenuItem index="1">
            {{
              default: () => <Icon icon="ic:round-maps-home-work" />,
              title: () => <span>工作台</span>,
            }}
          </ElMenuItem>
          <ElMenuItem index="12">
            {{
              default: () => <Icon icon="ic:round-maps-home-work" />,
              title: () => <span>工作台</span>,
            }}
          </ElMenuItem>
          <ElMenuItem index="13">
            {{
              default: () => <Icon icon="ic:round-maps-home-work" />,
              title: () => <span>工作台</span>,
            }}
          </ElMenuItem>
          <ElMenuItem index="14">
            {{
              default: () => <Icon icon="ic:round-maps-home-work" />,
              title: () => <span>工作台</span>,
            }}
          </ElMenuItem>
        </ElMenu>
      </>
    );
  },
});
</script>
