<script setup lang="ts">
import CardFlow from "./CardFlow.vue";
import CardCondition from "./CardCondition.vue";
import { useNamespace } from "element-plus";
defineOptions({
  name: "ConditionalBranch",
});
const ns = useNamespace("conditional-branch");
const { currentItem } = defineModel<{
  currentItem: object;
}>();
</script>

<template>
  <div class="" :class="[ns.b()]">
    <div :class="[ns.e('container')]" class="" v-for="item in 3">
      <CardCondition />
    </div>
  </div>
</template>

<style lang="scss">
@include b(conditional-branch) {
  @apply flex justify-center;
  border-top: 1px solid #000;
  width: calc(100% - 200px);

  @include e(container) {
    position: relative;
    padding: 30px 0 0 0;

    &::after {
      content: "";
      width: 1px;
      background: var(--active-color);
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      height: 30px;
    }
  }
}
</style>
