<script setup lang="ts">
import CardFlow from "./CardFlow.vue";
import { useNamespace, ElButton } from "element-plus";
import { useIcon } from "@/components/Icon";
import { ICON } from "@/views/Example/ExamineApprove/constant";
import { getBorderConfig } from "@/views/Example/ExamineApprove/utils";

defineOptions({
  name: "ConditionalBranch",
});
const ns = useNamespace("conditional-branch");
const { currentItem } = defineModel<{
  currentItem: object;
}>();
</script>

<template>
  <div class="relative" :class="[ns.b()]">
    <header :class="[ns.e('header')]">
      <ElButton
        size="small"
        type="primary"
        round
        :icon="useIcon({ icon: ICON.add })"
      >
        条件分支
      </ElButton>
    </header>
    <main :class="[ns.e('container')]">
      <article
        :class="[ns.e('card')]"
        v-for="(item, index) in currentItem.children"
        :key="item.id"
      >
        <!--        卡片-->
        <CardFlow v-model:currentItem="currentItem.children[index]" />
        <!--        border配置-->
        <div
          v-for="(t, i) in getBorderConfig(index, currentItem.children.length)"
          :key="i"
          :class="[ns.em('border', t)]"
        />
        <!--        递归组件-->
        <template v-if="Array.isArray(item.children)">
          <ConditionalBranch v-model:currentItem="currentItem.children[index]" />
        </template>
      </article>
    </main>
  </div>
</template>

<style lang="scss">
$prefix-cls: #{$namespace}-conditional-branch;
$mt: 30;
@include b(conditional-branch) {
  @apply z-40;
  @include e(header) {
    @apply flex justify-center absolute left-50/100 -top-42px transform-gpu -translate-x-1/2 z-30;
  }

  @include e(container) {
    @apply flex justify-center mt-30px z-20;
  }

  @include e(card) {
    @apply relative pl-30px pr-30px;
  }
}

$border-direction: top, top-right, top-left, bottom-right, bottom-left;
@for $i from 1 through length($border-direction) {
  $item: nth($border-direction, $i);
  .#{$prefix-cls}__border--#{$item} {
    @apply bg-zinc-300 z-10 absolute transform-gpu;

    @if $item == top {
      @apply w-1px h-#{$mt}px left-1/2 -top-#{$mt}px translate-x-1/2;
    }

    @if $item == top-right {
      @apply h-1px right-0 left-1/2 -top-#{$mt}px;
    }

    @if $item == top-left {
      @apply h-1px right-1/2 left-0 -top-#{$mt}px;
    }

    @if $item == bottom-right {
      @apply h-1px right-0 left-1/2 bottom-0;
    }

    @if $item == bottom-left {
      @apply h-1px right-1/2 left-0 bottom-0;
    }
  }
}
</style>
