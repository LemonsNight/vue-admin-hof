<script lang="ts" setup>
const getImg = (i, t) => {
  return new URL(`./static/${i}-${t}.jpg`, import.meta.url).href;
};
</script>
<template>
  <div class="flex flex-wrap">
    <div v-for="item in 18" :key="item">
      <div class="flex">
        <img
          class="w-200px"
          :key="`${item}-${i}`"
          v-for="i in 3"
          :src="getImg(item, i)"
        />
      </div>
    </div>
  </div>
</template>
