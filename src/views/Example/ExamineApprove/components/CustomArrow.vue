<script setup lang="ts">
import { computed, ref, unref } from "vue";
import SelectMenu from "./SelectMenu.vue";
import { ClickOutside as vClickOutside, useNamespace } from "element-plus";

defineOptions({
  name: "CustomArrow",
});

const ns = useNamespace("custom-arrow");
const { height, showBottomIcon } = defineModel<{
  height: number | string;
  showBottomIcon: boolean
}>();
const getStyle = computed(() => {
  return "min-height:" + unref(height) + "px";
});
// 触发菜单
const showMenu = ref(false);

const handleMenu = () => {
  showMenu.value = !unref(showMenu);
};
const onClickOutside = () => {
  showMenu.value = false;
};
</script>

<template>
  <div :class="[ns.b()]">
    <div
      class=""
      :class="[ns.e('card')]"
      :style="getStyle"
      v-click-outside="onClickOutside"
    >
      <div :class="[ns.e('trigger')]" @click="handleMenu">
        <Icon
          :class="[ns.em('trigger', 'icon')]"
          color="var(--active-color)"
          size="30"
          icon="ep:circle-plus-filled"
        />
      </div>
      <div :class="[ns.e('select-menu')]">
        <SelectMenu v-bind="$attrs" v-model:show="showMenu" />
      </div>
    </div>
    <Icon
      v-if="showBottomIcon"
      :class="[ns.e('caret')]"
      icon="ep:caret-bottom"
      color="var(--arrow-border-color)"
    />
  </div>
</template>

<style lang="scss">
@include b(custom-arrow) {
  @apply w-300px flex flex-col justify-center items-center relative;

  @include e(card) {
    @apply w-1px bg-zinc-300 relative;
  }

  @include e(trigger) {
    @apply transform-gpu -translate-y-1/2 -translate-x-1/2 left-1/2 cursor-pointer absolute top-1/2;

    @include m(icon) {
      @apply transform-gpu transition z-3 hover:scale-110;
    }
  }

  @include e(select-menu) {
    @apply absolute left-24px top-40px z-50;
  }

  @include e(caret) {
    @apply absolute left-1/2 -bottom-2px transform-gpu -translate-x-1/2;
  }
}
</style>
