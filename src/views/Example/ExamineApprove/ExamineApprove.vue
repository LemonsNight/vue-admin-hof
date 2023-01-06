<script setup lang="ts">
import CardFlow from "./components/CardFlow.vue";
import ConditionalBranch from "./components/ConditionalBranch.vue";
import { reactive } from "vue";
const formData = reactive([
  { title: "发起人", type: 0, id: 12 },
  { title: "审批人", type: 1, id: 22 },
  { title: "抄送人", type: 2, id: 31 },
  {
    title: "条件分支",
    type: 3,
    id: 3122,
    children: [
      { title: "条件1", type: 3, id: 312 },
      { title: "条件2", type: 3, id: 321 },
      { title: "条件3", type: 3, id: 231 },
      { title: "条件1", type: 3, id: 312 },
    ],
  },
]);
</script>
<template>
  <div class="flex justify-center">
    <div>
      <div v-for="(item, index) in formData" :key="item.id">
        <!--    条件分支-->
        <ConditionalBranch
          v-model:currentItem="formData[index]"
          v-if="item.children"
        />
        <!--    单分支-->
        <CardFlow
          v-else
          v-model:currentItem="formData[index]"
          v-model:formData="formData"
        />
      </div>
    </div>
  </div>
</template>
