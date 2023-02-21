<template>
  <div class="not-container">
    <img :src="IMG" class="not-img" alt="404" />
    <div class="not-detail">
      <h2>403</h2>
      <h4>抱歉，您无权访问该页面~🙅‍♂️🙅‍♀</h4>
      <ElButton type="primary">返回首页</ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useRouter } from "vue-router";
// import { HOME_URL } from "@/config/config";
// const router = useRouter();
import { ElButton } from "element-plus";

const IMG = new URL(`./static/403.png`, import.meta.url).href;
</script>

<style scoped lang="scss">
@import "./Network.scss";
</style>
