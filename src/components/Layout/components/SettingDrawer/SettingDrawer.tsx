import { defineComponent } from "vue";
import { ElDivider, ElDrawer } from "element-plus";
import ThemeSwitch from "../ThemeSwitch";
import LayoutMode from "./LayoutMode.vue";

export default defineComponent({
  name: "SettingDrawer",
  setup(props, { attrs }) {
    return () => (
      <ElDrawer size={"400px"} title={"页面配置"} {...attrs}>
        <ElDivider>主题设置</ElDivider>
        <ThemeSwitch />
        <ElDivider>布局切换</ElDivider>
        <LayoutMode />
      </ElDrawer>
    );
  },
});
