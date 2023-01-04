<script lang="ts" setup>
import { useNamespace } from "element-plus";
import { useConfigStore } from "@/stores/modules/config";
import { computed, toRefs, unref } from "vue";
import { useFullscreen } from "@vueuse/core";
import UserMenu from "./UserMenu.vue";
import BaseBreadcrumb from "./BaseBreadcrumb.vue";

const { toggle } = useFullscreen();
const ns = useNamespace("base-header");
const { setStateAttribute } = useConfigStore();
const { menuCollapse } = toRefs(useConfigStore());
const menuIcon = computed(() =>
  unref(menuCollapse)
    ? "ant-design:menu-unfold-outlined"
    : "ant-design:menu-fold-outlined"
);
</script>
<template>
  <div :class="[ns.b()]">
    <div :class="[ns.e('other')]">
      <aside
        :class="[ns.e('menu')]"
        @click="setStateAttribute({ menuCollapse: !menuCollapse })"
      >
        <Icon :icon="menuIcon" :size="20" />
      </aside>

      <BaseBreadcrumb />
    </div>
    <div :class="[ns.e('other')]">
      <aside :class="[ns.e('menu')]" @click="toggle">
        <Icon :size="20" icon="ep:full-screen" />
      </aside>
      <aside :class="[ns.e('menu')]">
        <UserMenu />
      </aside>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$prefix-cls: #{$namespace}-base-header;
@include b(base-header) {
  @apply w-full h-60px flex items-center justify-between;
  border-bottom: 1px solid var(--header-border-color);

  @include e(menu) {
    @apply cursor-pointer pl-10px pr-10px h-full flex items-center hover:bg-light-500/50;
  }

  @include e(other) {
    @apply flex items-center h-60px;
  }
}
</style>
