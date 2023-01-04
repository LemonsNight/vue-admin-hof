<script lang="ts" setup>
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";
</script>
<template>
  <ElBreadcrumb separator="/">
    <ElBreadcrumbItem :to="{ path: '/' }">工作台</ElBreadcrumbItem>
  </ElBreadcrumb>
</template>
