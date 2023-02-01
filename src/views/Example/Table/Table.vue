<script lang="tsx" setup>
import { Table } from "@/components/Table";
const propsList = [
  {
    label: "测试表头",
    prop: "test10",
    componentSlots: {
      default: () => {
        return <div>测试插槽default</div>;
      },
      header: () => {
        return <div>测试插槽header</div>;
      },
    },
  },
  { label: "测试表头", prop: "test11" },
  { label: "测试表头", prop: "test12" },
  {
    label: "多级表头",
    prop: "test13",
    children: [
      { label: "测试表头", prop: "test11" },
      { label: "测试表头", prop: "test12" },
    ],
  },
];
const data = [
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
  { test10: "测试", test11: "测试", test12: "测试" },
  { test10: "测试1", test11: "测试2", test12: "测试3" },
];
</script>

<template>
  <Table :data="data" :props-list="propsList" />
</template>
