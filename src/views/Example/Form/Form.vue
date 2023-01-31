<script lang="ts" setup>
import { Form } from "@/components/Form";
import { propsList, searchProps } from "@/views/Example/Form/constant";
import { ref, unref } from "vue";
import { ElButton } from "element-plus";

import SearchForm from "@/components/Form/src/SearchForm.vue";

const FormRef = ref();
const getRef = () => {
  const ComRefs = unref(FormRef)?.getComponentRef();
  unref(ComRefs)?.AutocompleteRef?.focus();
};
</script>

<template>
  <SearchForm :props-list="searchProps" />
  <ElButton @click="getRef">使用Ref设置焦点</ElButton>
  <Form ref="FormRef" :props-list="propsList"></Form>
</template>
