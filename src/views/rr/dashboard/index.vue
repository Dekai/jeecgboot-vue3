<template>
  <div class="p-4">
    <StatusCard class="enter-y" />
    <ExpenseChart class="!my-4 enter-y"/>
    <div class="md:flex enter-y">
      <AssetCategory class="md:w-1/3 w-full"/>
      <IncomeCategory class="md:w-1/3 w-full"/>
      <ExpenseCategory class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full"/>
    </div>

  </div>
</template>

<script lang="ts" setup>
import AssetCategory from "./components/AssetCategory.vue";
import ExpenseCategory from "./components/ExpenseCategory.vue";
import IncomeCategory from "./components/IncomeCategory.vue";
import ExpenseChart from "/@/views/rr/dashboard/components/ExpenseChart.vue";
import StatusCard from "/@/views/rr/dashboard/components/StatusCard.vue";

</script>
