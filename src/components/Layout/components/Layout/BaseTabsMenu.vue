<script lang="ts" setup>
import { useNamespace } from "element-plus";

const ns = useNamespace("base-tabs-menu");
</script>
<template>
  <ElScrollBar>
    <ul v-menu :class="[ns.b()]">
      <li></li>
      <li
        v-for="item in 30"
        :key="item"
        :class="[ns.e('item'), item === 1 ? ns.e('active') : '', '']"
      >
        <span>测试{{ item }}</span>
        <Icon icon="material-symbols:close" />
      </li>
    </ul>
  </ElScrollBar>
</template>

<style lang="scss" scoped>
@include b(base-tabs-menu) {
  @apply flex items-center w-full bg-blue-400 h-30px;

  @include e(item) {
    @apply bg-gray-400 flex items-center w-1/10 max-w-240px whitespace-nowrap;
  }

  @include e(active) {
    @apply bg-blue-400 overflow-hidden rounded;
  }
}
</style>
