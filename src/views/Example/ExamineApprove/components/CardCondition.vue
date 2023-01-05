<script lang="ts" setup>
import { ElCard } from "element-plus";
defineOptions({
  name: "CardCondition",
});
</script>
<template>
  <div class="p-100px">
    <ElCard shadow="hover" class="w-300px">
      <template #header>
        <header class="flex justify-between">
          <span>条件</span>
          <span>优先级</span>
        </header>
      </template>
      <main>
        <span>无条件</span>
      </main>
    </ElCard>
  </div>
</template>
