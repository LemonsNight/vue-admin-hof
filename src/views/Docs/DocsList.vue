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
import ArticleList from "./components/ArticleList.vue";
import UserInfo from "./components/UserInfo.vue";
import { useDesign } from "@/hooks/web/useDesign";
// import { initConfig } from "@/views/Docs/utils/initBlog";
const { getPrefixCls } = useDesign();
const prefixCls = getPrefixCls("blog-list");

// const map = new Map();
// const demo = "惨淡贻哺笑大方营嗷经嗷待";
// import("@/assets/JSON/idiom.json").then((res) => {
//   if (window.Worker) {
//     const threadWorker = new Worker("worker.js");
//   }
//
//   res.default.forEach((t) => {
//     const text = t.word.split("")[0];
//     if (map.has(text)) {
//       map.set(text, [...map.get(text), t.word]);
//     } else {
//       map.set(text, [t.word]);
//     }
//   });
//   const t = new Set(demo.split(""));
//   t.forEach((item) => {
//     if (map.has(item)) {
//       map.get(item).forEach((f) => {
//         const isSuccess = f.split("").every((a) => t.has(a));
//         if (isSuccess) {
//           console.log(f);
//         }
//       });
//     }
//   });
// });
// initConfig();
</script>
<template>
  <article :class="[prefixCls]">
    <HeaderNav />
    <UserInfo />
    <ArticleList />
  </article>
</template>
<style lang="scss">
$prefix-cls: #{$namespace}-blog-list;
.#{$prefix-cls} {
  background-image: url("@/assets/blog/background.png");
}
</style>
