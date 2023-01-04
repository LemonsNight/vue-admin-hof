<script lang="ts" setup>
import { useNamespace } from "element-plus";
import { computed, toRefs, unref } from "vue";
import { useConfigStore } from "@/stores/modules/config";
const { menuCollapse } = toRefs(useConfigStore());
const ns = useNamespace("base-logo");
const getClass = computed(() => (unref(menuCollapse) ? "" : "rounded-1/2"));
</script>
<template>
  <aside :class="[ns.b()]">
    <img
      :class="[ns.e('logo'), getClass]"
      src="@/assets/common/logo.png"
      alt="LOGO"
    />
    <Transition name="fade">
      <h1 v-show="!menuCollapse" :class="[ns.e('name')]">VueAdminHOF</h1>
    </Transition>
  </aside>
</template>
<style lang="scss" scoped>
@include b(base-logo) {
  @apply flex items-center p-1 h-60px;

  @include e(logo) {
    @apply w-52px h-52px transition-all border-2 border-dark-100 mr-4px cursor-pointer;

    @variants dark {
      @apply border-light-100;
    }
  }

  @include e(name) {
    @apply font-bold;

    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text; // 背景被裁剪成文字的前景色。
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; // 指定文本字符的填充颜色。如果未设置此属性，则使用color属性的值。
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.32s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
