<template>
  <Form
    v-if="propsList.length > 1"
    inline
    :is-col="true"
    :class="ns.b()"
    :props-list="propsList"
    ref="FormRef"
  />
</template>
<script lang="tsx" setup>
import { Form, FormExposeType, SetSchemaOptions } from "@/components/Form";
import { ElButton, useNamespace } from "element-plus";
import { computed, ref, unref } from "vue";
import { useIcon, Icon } from "@/components/Icon";

import type { FormSchema } from "@/components/Form";
import { isObject } from "@vueuse/core";
defineOptions({
  name: "SearchForm",
});

const props = defineProps<{
  propsList: FormSchema[];
}>();
const ns = useNamespace("search-form");
const FormRef = ref<FormExposeType>();
const isMergeField = ref(false);
const mergeMax = 2 + 1;
function onSearch() {
  const getFormRef = unref(FormRef)!.ElFormRef;
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
  const getFormRef = unref(FormRef)!.ElFormRef;
  getFormRef.resetFields();
}
function setMergeField() {
  isMergeField.value = !unref(isMergeField);
  const fieldList = propsList.value
    .slice(mergeMax, Infinity)
    .map(({ prop: field }) => ({
      field,
      path: "isHidden",
      value: unref(isMergeField),
    })) as SetSchemaOptions[];
  unref(FormRef)?.setSchema(fieldList);
}
const propsList = computed(() => {
  return [
    ...props.propsList,
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
            {propsList.value.length > mergeMax + 1 && (
              <ElButton
                text
                onClick={() => {
                  setMergeField();
                }}
              >
                <span>合并</span>
                <Icon
                  class="ml-1"
                  icon={unref(isMergeField) ? "ep:arrow-down" : "ep:arrow-up"}
                />
              </ElButton>
            )}
          </aside>
        );
      },
      colProps: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
    },
  ].map((item) => ({
    ...item,
    componentProps: {
      class: "w-full",
      ...(isObject(item.componentProps) ? item.componentProps : {}),
    },
    formItemProps: {
      class: "w-full",
      ...(isObject(item.formItemProps) ? item.formItemProps : {}),
    },
    colProps: isObject(item.colProps)
      ? item.colProps
      : { xs: 24, sm: 12, md: 12, lg: 8, xl: 6 },
  })) as FormSchema[];
});
</script>
<style lang="scss">
$prefix-cls: #{$namespace}-search-form;

@include b(search-form) {
  @include e(submit) {
    @apply w-full flex justify-end;
  }
}
.#{$namespace}-base-form__col:last-child {
  @apply flex-1 flex justify-end;
  .#{$namespace}-form-item {
    @apply mr-0;
  }
}
</style>
