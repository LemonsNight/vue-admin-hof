<script lang="ts" setup>
import {
  useNamespace,
  ElTabs,
  ElTabPane,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from "element-plus";
import { computed, reactive, ref, unref } from "vue";
import { useMouse } from "@vueuse/core";
import { ContextMenuList } from "@/components/Layout/constant/BaseTAbsMenu";
const ns = useNamespace("base-tabs-menu");

const tabsConfig = reactive({
  id: 1,
});

const onActiveTab = (id: number) => {
  tabsConfig.id = id;
};

const defaultMenu = [
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
  { label: "菜单" },
].map((item, i) => ({ label: item.label + i, value: i }));

const menuPoi = reactive({
  x: 0,
  y: 0,
});
const getStyle = computed(
  () => `transform: translate3d(${menuPoi.x}px, ${menuPoi.y}px, 0);`
);
const { x, y } = useMouse();
const ElDropdownRef = ref();
const isShow = ref(false);
const onContextmenu = (e: Event) => {
  e.preventDefault();
  if (!unref(isShow)) {
    unref(ElDropdownRef).handleClose();
  }
  menuPoi.x = x.value;
  menuPoi.y = y.value;
  setTimeout(() => {
    unref(ElDropdownRef).handleOpen();
  }, 60);
};

const handleVisible = (visible: boolean) => {
  isShow.value = visible;
};
</script>
<template>
  <!--  <ul v-menu :class="[ns.b()]">-->
  <!--    <li-->
  <!--      @click="onActiveTab(item)"-->
  <!--      v-for="item in 50"-->
  <!--      :key="item"-->
  <!--      :class="[ns.e('item'), item === tabsConfig.id && ns.e('active')]"-->
  <!--    >-->
  <!--      <span :class="[ns.e('title')]">tabs-{{ item }}</span>-->
  <!--      <Icon :class="[ns.e('close')]" icon="material-symbols:close" size="10" />-->
  <!--      <div-->
  <!--        :class="ns.em('item', `border-${i}`)"-->
  <!--        :key="`border-${i}`"-->
  <!--        v-for="i in ['left', 'right']"-->
  <!--      >-->
  <!--        <div-->
  <!--          v-if="item === tabsConfig.id"-->
  <!--          :class="ns.em('item', `${i}-round`)"-->
  <!--        />-->
  <!--      </div>-->
  <!--    </li>-->
  <!--  </ul>-->
  <div :class="[ns.b()]">
    <aside class="flex-1 overflow-hidden relative">
      <ElTabs closable v-model:active-name="tabsConfig.id">
        <ElTabPane
          v-for="item in defaultMenu"
          :key="item.value"
          :label="item.label"
          :name="item.value"
        >
          <template #label>
            <div
              class="flex items-center select-none"
              @contextmenu="onContextmenu"
            >
              <Icon icon="ep:menu" />
              <span>{{ item.label }}</span>
            </div>
          </template>
        </ElTabPane>
      </ElTabs>
    </aside>
  </div>
  <div :style="getStyle" class="absolute z-1 top-0 left-0">
    <ElDropdown
      trigger="contextmenu"
      ref="ElDropdownRef"
      @visible-change="handleVisible"
      :popper-class="ns.e('popper-class')"
      :class="[ns.e('base-dropdown')]"
      :popper-options="{
        modifiers: [
          {
            name: 'computeStyles',
            options: {
              roundOffsets: ({ y: _y }) => ({
                x: Math.round(menuPoi.x),
                y: Math.round(_y),
              }),
            },
          },
        ],
      }"
    >
      <template #default>
        <i />
      </template>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in ContextMenuList"
            :key="item.label"
            :divided="item.divided"
          >
            <Icon :icon="item.icon"></Icon>
            <span>{{ item.label }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </ElDropdown>
  </div>
</template>

<style lang="scss">
$prefix-cls: #{$namespace}-base-tabs-menu;
.#{$prefix-cls} {
  @apply pl-4 pr-4;
  .#{$namespace}-tabs__header {
    margin: 0;
  }
  .#{$namespace}-tabs__item {
    @apply inline-flex items-center;
  }
  .#{$namespace}-tabs__active-bar {
    height: 3px;
  }
  .#{$namespace}-dropdown__popper {
    transition: all 0.1s;
  }
}
@include b(base-tabs-menu) {
  @include e(popper-class) {
    -webkit-transition-property: left, top, rigt, bottom;
    -o-transition-property: left, top, rigt, bottom;
    transition-property: left, top, rigt, bottom;
    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition-duration: 150ms;
    -o-transition-duration: 150ms;
    transition-duration: 150ms;
    overflow: hidden;
  }
}
//@mixin common-round($direction) {
//  @if $direction == left {
//    border-radius: 0 0 0 3px;
//  }
//  @if $direction == right {
//    border-radius: 0 0 3px 0;
//  }
//  @apply w-10px h-10px bg-light-900 z-10;
//}

//@include b(base-tabs-menu) {
//  background: var(--tabs-bg-color);
//  @apply relative flex items-center pt-2px pl-2 pr-2 text-xs select-none overflow-hidden;
//
//  @include e(item) {
//    @apply relative flex items-center whitespace-nowrap pl-10px pr-2px pt-1 pb-1 cursor-default;
//
//    @include m(border-right) {
//      @apply absolute bottom-0 -left-10px bg-light-500;
//    }
//
//    @include m(border-left) {
//      @apply absolute bottom-0 -right-10px bg-light-500;
//    }
//    @include m(left-round) {
//      @include common-round(left);
//    }
//    @include m(right-round) {
//      @include common-round(right);
//    }
//  }
//
//  @include e(title) {
//    @apply mr-1;
//  }
//
//  @include e(close) {
//    @apply z-20;
//    &:hover {
//      background: var(--tabs-hover-close-bg-color);
//      color: var(--tabs-hover-close-color);
//      @apply p-4px;
//    }
//  }
//
//  @include e(active) {
//    @apply relative;
//    background: var(--tabs-active-bg-color);
//    border-radius: 2px 2px 0 0;
//  }
//}
</style>
