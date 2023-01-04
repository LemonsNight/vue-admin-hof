<script setup lang="ts">
import CardFlow from "./components/CardFlow.vue";
import { reactive } from "vue";
const formData = reactive({
  title: "发起人",
});
</script>
<template>
  <CardFlow v-model:title="formData.title" />
</template>
