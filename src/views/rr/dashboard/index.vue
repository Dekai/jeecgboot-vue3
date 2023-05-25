<template>
  <div class="p-4">
    <div class="md:flex enter-y">
      <AssetCategory class="md:w-1/3 w-full"/>
      <IncomeCategory class="md:w-1/3 w-full"/>
      <ExpenseCategory class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import AssetCategory from "./components/AssetCategory.vue";
import ExpenseCategory from "./components/ExpenseCategory.vue";
import IncomeCategory from "./components/IncomeCategory.vue";

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 500);
</script>
