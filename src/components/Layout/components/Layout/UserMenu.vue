<script lang="ts" setup>
import {
  ElAvatar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from "element-plus";
</script>
<template>
  <ElDropdown size="large">
    <div>
      <ElAvatar>H</ElAvatar>
      <span class="ml-1">永遠消失的幻想</span>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem>修改信息</ElDropdownItem>
        <ElDropdownItem>退出系统</ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>
