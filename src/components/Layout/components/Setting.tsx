import { defineComponent, ref, unref } from "vue";
import { Icon } from "@/components/Icon";
import SettingDrawer from "./SettingDrawer/SettingDrawer";
import type { Position } from "@vueuse/core";
import { useDraggable, useWindowSize } from "@vueuse/core";

export default defineComponent({
  name: "Setting",
  setup() {
    const show = ref(false);
    const Setting = ref<HTMLElement | null>(null);
    const { width, height } = useWindowSize();
    const { style } = useDraggable(Setting, {
      initialValue: { x: width.value - 40, y: height.value / 2 },
      onMove: (position: Position) => {
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
      },
    });
    return () => (
      <>
        <div
          style={`${style.value}`}
          ref={Setting}
          onClick={() => (show.value = !show.value)}
          class="p-2 fixed bg-[var(--hof-color-primary)] rounded-md cursor-pointer hover:rotate-center flex items-center"
        >
          <Icon
            size="20"
            color="var(--hof-color-white)"
            icon="arcticons:set-edit"
          />
        </div>
        <SettingDrawer v-model={show.value} />
      </>
    );
  },
});
