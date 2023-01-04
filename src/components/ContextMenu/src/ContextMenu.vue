<script lang="ts" setup>
import { useNamespace } from "element-plus";
import { computed, onMounted, reactive } from "vue";

const ns = useNamespace("contextmenu");

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const customContextmenu = reactive({
  x: 0,
  y: 0,
});
onMounted(() => {
  window._customContextmenu = customContextmenu;
});
const getStyle = computed(
  () =>
    `transform: translate3d(${customContextmenu.x}px, ${customContextmenu.y}px, 0);`
);
</script>
<template>
  <Teleport to="body">
    <ul :class="[ns.b()]" :style="getStyle">
      <li :class="[ns.e('item')]">
        <Icon icon="line-md:download-loop" />
        <span :class="[ns.em('item', 'text')]">将媒体投放到屏幕上面</span>
      </li>
      <li :class="[ns.e('item')]">
        <Icon icon="line-md:download-loop" />
        <span :class="[ns.em('item', 'text')]">测试菜单2</span>
      </li>
      <li :class="[ns.e('item')]">
        <Icon icon="line-md:download-loop" />
        <span :class="[ns.em('item', 'text')]">测试菜单3</span>
      </li>
    </ul>
  </Teleport>
</template>
<style lang="scss" scoped>
$prefix-cls: #{$namespace}-contextmenu;
@include b(contextmenu) {
  @apply absolute z-1 top-0 left-0 bg-light-100 p-2 text-dark-50 rounded transition-all w-300px;
  box-shadow: 0 0 2px #000;

  @include e(item) {
    @apply cursor-pointer pl-2 pr-2 pt-1 pb-1 hover:bg-light-900 rounded-sm flex items-center;

    @include m(text) {
      @apply ml-2;
    }
  }
}
</style>
