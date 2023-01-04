<script setup lang="ts">
import { RouterView } from "vue-router";
import { ElConfigProvider } from "element-plus";
import { useConfig } from "@/hooks/web/useConfig";

const { namespace } = useConfig();
</script>

<template>
  <ElConfigProvider :namespace="namespace">
    <RouterView />
  </ElConfigProvider>
</template>
