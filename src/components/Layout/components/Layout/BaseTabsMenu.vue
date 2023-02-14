<script lang="ts" setup>
import { useNamespace, ElScrollbar } from "element-plus";
import { reactive } from "vue";

const ns = useNamespace("base-tabs-menu");

const tabsConfig = reactive({
  id: 1,
});

const onActiveTab = (id: number) => {
  tabsConfig.id = id;
};
</script>
<template>
  <ul v-menu :class="[ns.b()]">
    <li
      @click="onActiveTab(item)"
      v-for="item in 50"
      :key="item"
      :class="[ns.e('item'), item === tabsConfig.id && ns.e('active')]"
    >
      <span :class="[ns.e('title')]">tabs-{{ item }}</span>
      <Icon :class="[ns.e('close')]" icon="material-symbols:close" size="10" />
      <div
        :class="ns.em('item', `border-${i}`)"
        :key="`border-${i}`"
        v-for="i in ['left', 'right']"
      >
        <div
          v-if="item === tabsConfig.id"
          :class="ns.em('item', `${i}-round`)"
        />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@mixin common-round($direction) {
  @if $direction == left {
    border-radius: 0 0 0 3px;
  }
  @if $direction == right {
    border-radius: 0 0 3px 0;
  }
  @apply w-10px h-10px bg-light-900 z-10;
}

@include b(base-tabs-menu) {
  background: var(--tabs-bg-color);
  @apply relative flex items-center pt-2px pl-2 pr-2 text-xs select-none overflow-hidden;

  @include e(item) {
    @apply relative flex items-center whitespace-nowrap pl-10px pr-2px pt-1 pb-1 cursor-default;

    @include m(border-right) {
      @apply absolute bottom-0 -left-10px bg-light-500;
    }

    @include m(border-left) {
      @apply absolute bottom-0 -right-10px bg-light-500;
    }
    @include m(left-round) {
      @include common-round(left);
    }
    @include m(right-round) {
      @include common-round(right);
    }
  }

  @include e(title) {
    @apply mr-1;
  }

  @include e(close) {
    @apply z-20;
    &:hover {
      background: var(--tabs-hover-close-bg-color);
      color: var(--tabs-hover-close-color);
      @apply p-4px;
    }
  }

  @include e(active) {
    @apply relative;
    background: var(--tabs-active-bg-color);
    border-radius: 2px 2px 0 0;
  }
}
</style>
