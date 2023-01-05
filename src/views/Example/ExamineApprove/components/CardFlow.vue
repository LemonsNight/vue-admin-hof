<script lang="ts" setup>
import { useNamespace, ElInput } from "element-plus";
const ns = useNamespace("card-flow");
import { ElCard } from "element-plus";
import { computed, ref, unref } from "vue";
import { CardConfig, getInitTypeConfig } from "../constant";
import CustomArrow from "./CustomArrow.vue";
import type { MenuConfigType } from "../types";

defineOptions({
  name: "CardFlow",
});

const { formData, currentItem } = defineModel<{
  formData: [];
  currentItem: object;
}>();

const cardConfig = computed(() => {
  return CardConfig(unref(currentItem).type);
});

const inputState = ref(true);
const InputRef = ref<typeof ElInput>();

const triggerInput = () => {
  inputState.value = !unref(inputState);
  if (!unref(inputState)) {
    unref(InputRef)?.focus();
  }
};
const onClickMenu = (value: MenuConfigType) => {
  const index = unref(formData).findIndex(
    (item) => item.id === unref(currentItem).id
  );
  formData.value.splice(index + 1, 0, getInitTypeConfig(value.type));
};
const onClickClose = () => {
  const index = unref(formData).findIndex(
    (item) => item.id === unref(currentItem).id
  );
  formData.value.splice(index, 1);
};
</script>

<template>
  <div v-if="currentItem" class="flex items-center flex-col">
    <ElCard shadow="hover" :class="[ns.b()]">
      <template #header>
        <header :class="[ns.e(cardConfig.theme)]">
          <template v-if="currentItem.type">
            <div :class="[ns.e('input')]">
              <div
                :class="[
                  ns.em('input', 'container'),
                  'underline',
                  'cursor-pointer',
                ]"
                v-show="inputState"
                @click="triggerInput"
              >
                <div :class="[ns.em('input', 'title')]">
                  {{ currentItem.title }}
                </div>
                <Icon :class="[ns.em('input', 'icon')]" icon="ep:edit" />
              </div>
              <ElInput
                ref="InputRef"
                @blur="triggerInput"
                v-show="!inputState"
                v-model="currentItem.title"
                size="small"
                maxlength="20"
              >
                <template #suffix>
                  <Icon icon="ep:edit"></Icon>
                </template>
              </ElInput>
            </div>
            <Icon
              @click="onClickClose"
              icon="ep:close"
              class="cursor-pointer"
            />
          </template>

          <template v-else>
            <div :class="[ns.e('input')]">
              {{ currentItem.title }}
            </div>
          </template>
        </header>
      </template>

      <main class="cursor-pointer">
        <div class="w-full flex justify-between items-center select-none">
          <span>请选择</span>
          <Icon icon="ep:arrow-right"></Icon>
        </div>
      </main>
    </ElCard>

    <CustomArrow @clickMenu="onClickMenu" :height="100" />
  </div>
</template>

<style lang="scss">
$prefix-cls: #{$namespace}-card-flow;
$text: #fff; // 默认文字颜色

@mixin header {
  color: $text;
  @apply p-10px h-36px text-12px flex items-center justify-between;
}

//页面样式
@include b(card-flow) {
  @apply w-300px;

  @include e(initiate) {
    background: var(--initiate--color);
    @include header();
  }

  @include e(approve) {
    background: var(--approve--color);
    @include header();
  }

  @include e(copy) {
    background: var(--copy--color);
    @include header();
  }

  @include e(input) {
    @apply flex items-center w-70/100;

    @include m(container) {
      @apply w-full flex items-center;
    }

    @include m(icon) {
      @apply cursor-pointer ml-1;
    }

    @include m(title) {
      @apply max-w-70/100 truncate;
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
