<script setup lang="ts">
import { ElButton, useNamespace } from "element-plus";
import { MenuConfig } from "../constant";
import type { MenuConfigType } from "../types";

defineOptions({
  name: "SelectMenu",
});

const ns = useNamespace("select-menu");
const { show } = defineModel<{
  show: boolean;
}>();
const emits = defineEmits<SE<{ clickMenu: [val: MenuConfigType] }>>();
const onClickMenu = (item: MenuConfigType) => {
  emits("clickMenu", item);
  show.value = false;
};
</script>

<template>
  <div :class="[ns.b()]" v-if="show">
    <div v-for="item in MenuConfig" :key="item.title">
      <ElButton text :class="[ns.e('button')]" @click="onClickMenu(item)">
        <Icon v-bind="item.icon" />
        <span>{{ item.title }}</span>
      </ElButton>
    </div>
  </div>
</template>

<style lang="scss">
@include b(select-menu) {
  @apply max-w-150px p-1 bg-light-50 border rounded;

  @include e(button) {
    @apply w-full flex justify-between;
  }
}
</style>
