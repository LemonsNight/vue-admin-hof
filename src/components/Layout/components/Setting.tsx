import { computed, defineComponent, ref, unref } from "vue";
import { Icon } from "@/components/Icon";
import { useDraggable, useWindowSize } from "@vueuse/core";
import SettingDrawer from "./SettingDrawer/SettingDrawer";
import type { Position } from "@vueuse/core";

export default defineComponent({
  name: "Setting",
  setup() {
    const show = ref(false);
    const isRight = ref(false);
    const isFixed = ref(false);
    const Setting = ref<HTMLElement>();
    const { width, height } = useWindowSize();
    const { style } = useDraggable(Setting, {
      initialValue: { x: width.value - 40, y: height.value / 2 },
      onMove: (position: Position) => {
        if (!unref(isFixed)) {
          isFixed.value = true;
        }
        if (position.x > width.value - 40) {
          position.x = width.value - 40;
        }
        if (position.x < 0) {
          position.x = 0;
        }
        if (position.y > height.value - 40) {
          position.y = height.value - 40;
        }
        if (position.y < 0) {
          position.y = 0;
        }
      },
      onEnd: (position: Position) => {
        const isLeft = unref(width) / 2 > position.x;
        if (isLeft) {
          position.x = 4;
        } else {
          position.x = unref(width) - 40;
        }
        isRight.value = isLeft;
        setTimeout(() => {
          isFixed.value = false;
        }, 1000);
      },
    });
    const setStyle = computed(() => {
      if (!unref(isFixed)) {
        return !unref(isRight) ? "right:0;left:auto" : "";
      }
      return "";
    });
    return () => (
      <>
        <div
          style={`${style.value};${setStyle.value}`}
          ref={Setting}
          onClick={() => (show.value = !show.value)}
          class={[
            "p-2 fixed bg-[var(--hof-color-primary)] rounded-md cursor-pointer hover:rotate-center flex items-center",
          ]}
        >
          <Icon
            size={20}
            color="var(--hof-color-white)"
            icon="arcticons:set-edit"
          />
        </div>
        <SettingDrawer v-model={show.value} />
      </>
    );
  },
});
