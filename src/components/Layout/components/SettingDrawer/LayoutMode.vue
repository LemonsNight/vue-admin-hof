<script lang="ts" setup>
import { useConfigStore } from "@/stores/modules/config";
import { toRefs, unref } from "vue";

const { setLayoutMode, layoutMode } = toRefs(useConfigStore());

const getClass = (index: number) => {
  return unref(layoutMode) === index ? "active" : "";
};
</script>
<template>
  <acticle class="flex justify-around w-full">
    <div :class="['mode-v1', getClass(1)]" @click="setLayoutMode(1)">
      <div class="mode-v1--head bg-gray-400"></div>
      <div class="mode-v1--nav bg-blue-400"></div>
      <div class="mode-v1--main bg-light-400"></div>
    </div>

    <div :class="['mode-v2', 'ml-2', getClass(2)]" @click="setLayoutMode(2)">
      <div class="mode-v2--head bg-gray-400"></div>
      <div class="mode-v2--nav bg-blue-400"></div>
      <div class="mode-v2--main bg-light-400"></div>
    </div>

    <div :class="['mode-v3', 'ml-2', getClass(3)]" @click="setLayoutMode(3)">
      <div class="mode-v3--head bg-gray-400"></div>
      <div class="mode-v3--main bg-light-400"></div>
    </div>
  </acticle>
</template>
<style lang="scss" scoped>
@mixin common() {
  @apply grid cursor-pointer rounded overflow-hidden border-2;
}
.active {
  @apply border-blue-500/50;
}
.mode-v1 {
  @include common();
  grid-template-areas:
    "head head"
    "nav  main";
  grid-template-columns: 10px 40px;
  grid-template-rows: 10px 40px;

  &--head {
    grid-area: head;
  }
  &--nav {
    grid-area: nav;
  }
  &--main {
    grid-area: main;
  }
}

.mode-v2 {
  @include common();
  grid-template-areas:
    "head head"
    "nav  main";
  grid-template-columns: 20px 30px;
  grid-template-rows: 10px 40px;

  &--head {
    grid-area: head;
  }
  &--nav {
    grid-area: nav;
  }
  &--main {
    grid-area: main;
  }
}

.mode-v3 {
  @include common();
  grid-template-areas:
    "head"
    "main";
  grid-template-columns: 50px;
  grid-template-rows: 10px 40px;

  &--head {
    grid-area: head;
  }
  &--main {
    grid-area: main;
  }
}
</style>
