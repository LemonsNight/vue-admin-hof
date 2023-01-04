<script lang="ts" setup>
import { useNamespace, ElInput } from "element-plus";
const ns = useNamespace("card-flow");
import { ElCard } from "element-plus";
import { computed, ref, unref } from "vue";
import { CardConfig } from "@/views/Example/ExamineApprove/constant";

const { title } = defineModel<{
  title: string;
}>();
let type = ref<1 | 2 | 3>(1);

const cardConfig = computed(() => {
  return CardConfig(unref(type));
});

const inputState = ref(true);
const InputRef = ref<typeof ElInput>();
const triggerInput = () => {
  inputState.value = !unref(inputState);
  if (!unref(inputState)) {
    unref(InputRef)?.focus();
  }
};
</script>
<template>
  <div :class="[ns.b()]">
    <ElCard shadow="never">
      <template #header>
        <header :class="[ns.e(cardConfig.theme)]">
          <div :class="[ns.e('input')]">
            <div
              :class="[ns.em('input', 'text')]"
              v-show="inputState"
              @click="triggerInput"
            >
              <div class="max-w-70/100 truncate">{{ title }}</div>
              <Icon :class="[ns.em('input', 'icon')]" icon="ep:edit"></Icon>
            </div>
            <ElInput
              ref="InputRef"
              @blur="triggerInput"
              v-show="!inputState"
              v-model="title"
              size="small"
            >
              <template #suffix>
                <Icon icon="ep:edit"></Icon>
              </template>
            </ElInput>
          </div>
          <Icon icon="ep:close" class="cursor-pointer"></Icon>
        </header>
      </template>
    </ElCard>
  </div>
</template>
<style lang="scss">
$prefix-cls: #{$namespace}-card-flow;
$initiate: #215476; // 发起
$approve: #fcca00; // 审批
$copy: #1890ff; // 抄送
$text: #fff; // 默认文字颜色

@mixin header {
  color: $text;
  @apply p-10px h-36px text-12px flex items-center justify-between;
}

//页面样式
@include b(card-flow) {
  @apply w-300px;
  @include e(initiate) {
    background: $initiate;
    @include header();
  }
  @include e(approve) {
    background: $approve;
    @include header();
  }
  @include e(copy) {
    background: $copy;
    @include header();
  }
  @include e(input) {
    @apply flex items-center max-w-80/100;
    @include m(text) {
      @apply flex items-center underline cursor-pointer;
    }
    @include m(icon) {
      @apply cursor-pointer ml-1;
    }
  }
}

//公共组件样式
.#{$prefix-cls} {
  .#{$namespace}-card__header {
    padding: 0;
  }
}
</style>
