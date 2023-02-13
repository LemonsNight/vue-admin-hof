<script setup lang="ts">
import { RouterView } from "vue-router";
import { ElConfigProvider } from "element-plus";
import { useConfig } from "@/hooks/web/useConfig";
import { toRefs } from "vue";
import { useConfigStore } from "@/stores/modules/config";

const { getLocale } = toRefs(useConfigStore());
const { namespace } = useConfig();
</script>

<template>
  <ElConfigProvider :namespace="namespace" :locale="getLocale">
    <RouterView />
  </ElConfigProvider>
</template>
