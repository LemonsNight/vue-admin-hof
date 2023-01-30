<template>
  <Form
    inline
    :is-col="false"
    :class="ns.b()"
    :props-list="propsList"
    ref="FormRef"
  />
</template>
<script lang="tsx" setup>
import { Form } from "@/components/Form";
import { ElButton, useNamespace } from "element-plus";
import { ref, unref } from "vue";
import { useIcon, Icon } from "@/components/Icon";

import type { FormSchema } from "@/components/Form";
defineOptions({
  name: "SearchForm",
});

const ns = useNamespace("search-form");
const FormRef = ref<typeof Form>();
function onSearch() {
  const getFormRef = unref(FormRef)?.ElFormRef;
  console.log(getFormRef);
  return new Promise((resolve, reject) => {
    getFormRef.validate((isValid, invalidFields) => {
      if (isValid) {
        resolve(unref(FormRef)?.formData);
      } else {
        reject(invalidFields);
      }
    });
  });
}
function onReset() {
  const getFormRef = unref(FormRef)?.getElFormRef();
  getFormRef.resetFields();
}
const propsList: FormSchema[] = [
  {
    label: "Input 输入框",
    prop: "Input2",
    component: "Input",
  },
  {
    label: "Input 输入框",
    prop: "Input33",
    component: "Input",
  },
  {
    label: "Input 输入框",
    prop: "Input4",
    component: "Input",
  },
  {
    label: "Cascader 级联选择器",
    prop: "Cascader",
    component: "Cascader",
    componentProps: {
      options: [
        { label: "选项1", value: "1" },
        { label: "选项2", value: "2" },
      ],
    },
  },
  {
    label: "DatePicker 日期选择器",
    prop: "DatePicker",
    component: "DatePicker",
  },
  {
    render() {
      return (
        <aside class={[ns.e("submit")]}>
          <ElButton
            type="primary"
            icon={useIcon({ icon: "ep:search" })}
            onClick={() => onSearch()}
          >
            搜素
          </ElButton>
          <ElButton
            icon={useIcon({ icon: "ep:refresh" })}
            onClick={() => onReset()}
          >
            重置
          </ElButton>
          <ElButton text onClick={() => {}}>
            <span>合并</span>
            <Icon class="ml-1" icon="ep:arrow-down" />
          </ElButton>
        </aside>
      );
    },
  },
];
</script>
<style lang="scss">
$prefix-cls: #{$namespace}-search-form;

@include b(search-form) {
  @apply flex flex-wrap;

  @include e(submit) {
    @apply w-full flex justify-end;
  }
}

.#{$namespace}-form-item:last-child {
  @apply flex-1;
}
</style>
