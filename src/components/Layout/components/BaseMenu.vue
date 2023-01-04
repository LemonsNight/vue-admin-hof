<script lang="tsx">
import { defineComponent, ref } from "vue";
import {
  ElButton,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
} from "element-plus";
import { useConfig } from "@/hooks/web/useConfig";

export default defineComponent({
  name: "BaseMenu",
  setup() {
    const test = ref(false);
    const { getPrefixCls } = useConfig();
    const prefixCls = getPrefixCls("base-menu");
    return () => (
      <>
        <ElMenu class={prefixCls} mode={test.value ? "horizontal" : "vertical"}>
          <ElSubMenu index="44">
            {{
              title: () => "测试菜单",
              default: () => (
                <ElMenuItemGroup>
                  <ElMenuItem index="12">测试155</ElMenuItem>
                </ElMenuItemGroup>
              ),
            }}
          </ElSubMenu>
          <ElMenuItem index="1">测试61</ElMenuItem>
          <ElMenuItem index="2">测试15</ElMenuItem>
          <ElMenuItem index="3">测试14</ElMenuItem>
          <ElMenuItem index="4">测试13</ElMenuItem>
          <ElMenuItem index="5">测试12</ElMenuItem>
        </ElMenu>
        <ElButton
          type="primary"
          onClick={() => {
            test.value = !test.value;
          }}
        >
          切换
        </ElButton>
      </>
    );
  },
});
</script>
<style scoped lang="scss">
$prefix-cls: #{namespace}--menu;
.#{$prefix-cls} {
  background-color: #000;
  .is-active {
    background-color: #000;
  }
}
</style>
