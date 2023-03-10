<script lang="ts" setup>
import BaseLogo from "./BaseLogo.vue";
import { Menu } from "@/components/Menu";
import { useGlobalDataStore } from "@/stores/modules/globalData";

const globalData = useGlobalDataStore();
</script>
<template>
  <BaseLogo />
  <Menu :menu-item-list="globalData.combinationMenuList" />
</template>
