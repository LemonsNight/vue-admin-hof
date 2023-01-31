<script lang="ts" setup>
import { Table } from "@/components/Table";
const propsList = [
  { label: "测试表头", prop: "test10" },
  { label: "测试表头", prop: "test11" },
  { label: "测试表头", prop: "test12" },
];
</script>

<template>
  <Table :props-list="propsList" />
</template>
