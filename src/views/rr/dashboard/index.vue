<template>
  <div class="p-4">
    <div class="md:flex enter-y">
      <VisitRadar class="md:w-1/3 w-full" :loading="loading"/>
      <ExpenseCategory class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full"/>
      <SalesProductPie class="md:w-1/3 w-full" :loading="loading"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

import SalesProductPie from "/@/views/dashboard/Analysis/components/SalesProductPie.vue";
import VisitRadar from "/@/views/dashboard/Analysis/components/VisitRadar.vue";
import {ref} from "vue";
import ExpenseCategory from "./components/ExpenseCategory.vue";

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 500);
</script>
