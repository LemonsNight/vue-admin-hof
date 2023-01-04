import { defineComponent, ref } from "vue";
import { ElSwitch } from "element-plus";
import { useIcon } from "@/hooks/web/useIcon";
import { toggleDark } from "@/plugins/theme";

export default defineComponent({
  name: "ThemeSwitch",
  setup() {
    const Sun = useIcon({ icon: "emojione-monotone:sun", color: "#fde047" });
    const CrescentMoon = useIcon({
      icon: "emojione-monotone:crescent-moon",
      color: "#fde047",
    });
    const isSwitch = ref(false);
    return () => (
      <div class={"flex justify-center"}>
        <ElSwitch
          v-model={isSwitch.value}
          inline-prompt
          active-icon={Sun}
          inactive-icon={CrescentMoon}
          onChange={() => {
            toggleDark();
          }}
        />
      </div>
    );
  },
});
