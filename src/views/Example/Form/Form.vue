<script lang="ts" setup>
import { Form } from "@/components/Form";
import { propsList } from "@/views/Example/Form/constant";
import { ref, unref } from "vue";
import { ElButton } from "element-plus";

import SearchForm from "@/components/Form/src/SearchForm.vue";

const FormRef = ref();
const getRef = () => {
  const ComRefs = unref(FormRef)?.getComponentRef();
  unref(ComRefs)?.AutocompleteRef?.focus();
};

const onSubmit = () => {
  console.log(unref(FormRef)?.formData);
};
</script>
<template>
  <SearchForm />
  <ElButton @click="getRef">使用Ref设置焦点</ElButton>
  <ElButton @click="onSubmit">提交表单</ElButton>
  <Form ref="FormRef" :props-list="propsList"></Form>
</template>
