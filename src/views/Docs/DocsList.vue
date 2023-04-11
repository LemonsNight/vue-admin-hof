<!--<script lang="tsx">-->
<!--import { defineComponent, onMounted } from "vue";-->
<!--import { queryPosts } from "@/plugins/axios/modules/blog";-->

<!--export default defineComponent({-->
<!--  name: "DocsList",-->
<!--  setup() {-->
<!--    onMounted(() => {-->
<!--      queryPosts({});-->
<!--    });-->
<!--    return () => <div></div>;-->
<!--  },-->
<!--});-->
<!--</script>-->
<script setup lang="ts">
import HeaderNav from "./components/HeaderNav.vue";
import { useDesign } from "@/hooks/web/useDesign";
import { initConfig } from "@/views/Docs/utils/initBlog";

const { getPrefixCls } = useDesign();
const prefixCls = getPrefixCls("blog-list");
initConfig();
</script>
<template>
  <article :class="[prefixCls]">
    <HeaderNav />
  </article>
</template>
<style lang="scss">
$prefix-cls: #{$namespace}-blog-list;
.#{$prefix-cls} {
  background-image: url("@/assets/blog/background.png");
  min-height: 200vh;
}
</style>
