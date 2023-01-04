<script lang="ts" setup>
import { ElDialog, ElScrollbar, useNamespace } from "element-plus";
import { computed, ref, unref, useAttrs, useSlots } from "vue";
import { fromPairs } from "lodash-es";

defineOptions({
  name: "Dialog",
  inheritAttrs: false,
});
const slots = useSlots();
const { show, fullscreen, title } = defineModel<{
  show: boolean;
  fullscreen: boolean;
  title: string;
}>();
const init = () => {
  fullscreen.value = true;
  show.value = false;
};
init();
const ns = useNamespace("base-dialog");
const isFullscreen = ref(false);
const toggleFull = () => {
  isFullscreen.value = !unref(isFullscreen);
};
const fullscreenIcon = computed(() =>
  unref(isFullscreen) ? "ic:round-fullscreen-exit" : "ic:round-fullscreen"
);
const dialogAttrs = computed(() => {
  const attrs = useAttrs();
  const delArr = ["fullscreen", "title", "maxHeight"];
  return fromPairs(Object.entries(attrs).filter((f) => !delArr.includes(f[0])));
});
</script>

<template>
  <ElDialog
    v-model="show"
    :class="[ns.b()]"
    :close-on-click-modal="false"
    :fullscreen="isFullscreen"
    :show-close="false"
    destroy-on-close
    draggable
    lock-scroll
    v-bind="dialogAttrs"
  >
    <template #header="{ close }">
      <div :class="[ns.e('title')]">
        <div>
          {{ title }}
        </div>
        <div class="flex items-center justify-between">
          <Icon
            :icon="fullscreenIcon"
            class="icon-hover"
            size="20"
            @click="toggleFull"
          />
          <Icon class="icon-hover" icon="ep:close" size="20" @click="close" />
        </div>
      </div>
    </template>
    <ElScrollbar>
      <slot></slot>
    </ElScrollbar>
    <template v-if="slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </ElDialog>
</template>
<style lang="scss">
$prefix-cls: #{$namespace}-base-dialog;

@include b(base-dialog) {
  @include e(title) {
    @apply flex justify-between w-full;
  }
  .icon-hover {
    @apply cursor-pointer;
    &:hover {
      color: var(--#{$namespace}-color-primary);
    }
  }
}

.#{$prefix-cls} {
  .#{$namespace}-dialog__header {
    @apply flex justify-between items-center w-full;
    border-bottom: 1px solid var(--header-border-color);
    margin-right: 0;
    padding: 10px;
  }

  .#{$namespace}-dialog__body {
    padding: 10px 20px 0 20px;
    margin: 0 auto;
  }

  .#{$namespace}-dialog__footer {
    padding: 7px 20px 10px 20px;
    border-top: 1px solid var(--header-border-color);
  }
}
</style>
