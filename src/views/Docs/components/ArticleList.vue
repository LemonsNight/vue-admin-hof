<template>
  <div :class="[prefixCls]">
    <article :class="[`${prefixCls}-item`]" v-for="item in list" :key="item.id">
      <img
        :class="[`${prefixCls}-item__img`]"
        :src="item._headerImg[0]"
        alt="标题图片"
      />
      <h4>{{ item.title }}</h4>
      <p>作者：Daiyousei</p>
      <p>热度：30</p>
      <p>介绍：{{ item._body }}</p>
    </article>
    <article :class="[`${prefixCls}-item`]" v-for="item in list" :key="item.id">
      <img
        :class="[`${prefixCls}-item__img`]"
        :src="item._headerImg[0]"
        alt="标题图片"
      />
      <h4>{{ item.title }}</h4>
      <p>作者：Daiyousei</p>
      <p>热度：30</p>
      <p>介绍：{{ item._body }}</p>
    </article>
    <article :class="[`${prefixCls}-item`]" v-for="item in list" :key="item.id">
      <img
        :class="[`${prefixCls}-item__img`]"
        :src="item._headerImg[0]"
        alt="标题图片"
      />
      <h4>{{ item.title }}</h4>
      <p>作者：Daiyousei</p>
      <p>热度：30</p>
      <p>介绍：{{ item._body }}</p>
    </article>
  </div>
</template>
<script setup lang="ts">
import { queryPosts } from "@/plugins/axios/modules/blog";
import { onMounted, shallowRef } from "vue";
import { useDesign } from "@/hooks/web/useDesign";
import { getImgSrc, removeImgTags } from "../utils/utils";

const { getPrefixCls } = useDesign();
const prefixCls = getPrefixCls("blog-article");
const list = shallowRef();
const getList = async () => {
  const res = await queryPosts({});
  res.forEach((item) => {
    item["_headerImg"] = getImgSrc(item.body);
    item["_body"] = removeImgTags(item.body);
  });
  list.value = res;
  console.log(list.value);
};
onMounted(() => {
  getList();
});
</script>
<style lang="scss">
$prefix-cls: #{$namespace}-blog-article;
$border-radius: 1px;
.#{$prefix-cls} {
  @apply font-mono;
}
.#{$prefix-cls}-item {
  background: #fff;
  display: inline-block;
  width: calc(90% / 3);
  margin: 0 calc(10% / 3 / 2);
  padding: 12px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  border-radius: $border-radius;
  h4 {
    font-weight: 600;
    font-size: 14px;
    border-bottom: 1px dashed rgba(153, 153, 153, 0.5);
    padding: 6px 0;
    @include text-ellipsis(2);
  }
  p {
    color: rgba(153, 153, 153);
    font-size: 12px;
    line-height: 30px;
    @include text-ellipsis(2);
  }
}
.#{$prefix-cls}-item__img {
  border-radius: $border-radius;
  width: 100%;
}
</style>
