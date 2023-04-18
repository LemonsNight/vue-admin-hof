<template>
  <div :class="[prefixCls]" v-if="detail">
    <img
      :class="[`${prefixCls}-avatar`]"
      :src="detail.avatar_url"
      alt="头像"
      loading="lazy"
    />
    <h3 :class="[`${prefixCls}-title`]">{{ detail.login }}</h3>
    <p :class="[`${prefixCls}-desc`]">{{ detail.bio }}</p>
  </div>
</template>
<script lang="ts" setup>
import { getUserInfo } from "@/plugins/axios/modules/blog";
import { shallowRef } from "vue";
import { useDesign } from "@/hooks/web/useDesign";

const { getPrefixCls } = useDesign();
const prefixCls = getPrefixCls("user-info");
const detail = shallowRef();
const getDetail = async () => {
  detail.value = await getUserInfo();
  console.log(detail.value);
};
getDetail();
</script>
<style lang="scss">
$prefixCls: #{$namespace}-user-info;
.#{$prefixCls} {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  width: 370px;
  background: url("~/assets/blog/bg1.jpg") no-repeat;
  padding: 60px 10px 24px 10px;
  box-shadow: 0 0 3px 0px #f44336;
  @apply font-mono;
  text-align: center;
}
.#{$prefixCls}-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 0 10px 6px #fff;
}
.#{$prefixCls}-title {
  font-size: 20px;
  color: #333;
  font-weight: 500;
}
.#{$prefixCls}-desc {
  font-size: 12px;
  color: #999;
}
</style>
