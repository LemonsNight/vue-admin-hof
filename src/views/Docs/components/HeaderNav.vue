<script lang="ts" setup>
import { useDesign } from "@/hooks/web/useDesign";
import { getMenuList } from "@/plugins/axios/modules/blog";
import { onMounted, shallowRef } from "vue";

const { getPrefixCls } = useDesign();
const prefixCls = getPrefixCls("blog-header-nav");
const menuList = shallowRef();
const getMenu = async () => {
  menuList.value = await getMenuList();
};

onMounted(() => {
  getMenu();
});
</script>
<template>
  <header :class="[prefixCls, 'antialiased']">
    <article :class="[`${prefixCls}--author`]">
      <img src="@/assets/blog/header.png" alt="图标" />
      <div>
        <p :class="[`${prefixCls}--author__title`]">Daiyousei</p>
        <p :class="[`${prefixCls}--author__desc`]">落魄前端</p>
      </div>
    </article>
    <nav :class="[`${prefixCls}--nav`]">
      <div
        v-for="item in menuList"
        :key="item.id"
        :class="[`${prefixCls}--nav__item`]"
      >
        <span>{{ item.label }}</span>
      </div>
    </nav>
  </header>
</template>
<style lang="scss">
$prefix-cls: #{$namespace}-blog-header-nav;
.#{$prefix-cls} {
  display: flex;
  justify-content: space-between;
  color: var(--blog-menu-text-color);
  padding: 5px calc(100% - 95%);
  font-size: 16px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px) saturate(180%);
  transition: transform 0.5s;
  background-color: var(--blog-opacity);
  border-bottom: 1px solid var(--blog-border-color);
}
.#{$prefix-cls}--author {
  display: flex;
  align-items: center;
  font-size: 12px;
  img {
    border-radius: 50%;
    margin-right: 12px;
    box-shadow: 0 0 9px 1px #000;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
}
.#{$prefix-cls}--author__title {
  font-size: 16px;
}
.#{$prefix-cls}--author__desc {
  color: var(--blog-menu-secondary-color);
}

.#{$prefix-cls}--nav {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.#{$prefix-cls}--nav__item {
  margin: 0 6px;
  cursor: pointer;
  white-space: nowrap;
}
</style>
