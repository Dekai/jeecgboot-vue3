<template>
  <div class="md:flex">
    <Card
      size="small"
      title="现有总资产"
      :loading="loading"
      class="md:w-1/4 w-full !md:mt-0 !mt-4 !md:mr-4"
      :canExpan="false"
    >
      <template #extra>
        <Tag color="green">15年</Tag>
      </template>

      <div class="py-4 px-4 flex justify-between">
        <CountTo prefix="$" :startVal="1" :endVal="statusData?.currentAsset" class="text-2xl"/>
        <Icon icon="transaction|svg" :size="40"/>
      </div>

      <div class="p-2 px-4 flex justify-between">
        <span>退休总资产</span>
        <CountTo prefix="$" :startVal="1" :endVal="statusData?.expectedAsset"/>
      </div>
    </Card>
    <Card
      size="small"
      title="月花销"
      class="md:w-1/4 w-full !md:mt-0 !mt-4 !md:mr-4"
      :canExpan="false"
    >
      <template #extra>
        <Tag color="blue">月</Tag>
      </template>

      <div class="py-4 px-4 flex justify-between">
        <CountTo prefix="$" :startVal="1" :endVal="statusData?.monthExpense" class="text-2xl"/>
        <Icon icon="total-sales|svg" :size="40"/>
      </div>

      <div class="p-2 px-4 flex justify-between">
        <span>年花销</span>
        <CountTo prefix="$" :startVal="1" :endVal="statusData?.yearExpense"/>
      </div>
    </Card>
    <Card
      size="small"
      title="现有总资产"
      class="md:w-1/4 w-full !md:mt-0 !mt-4 !md:mr-4"
      :canExpan="false"
    >
      <template #extra>
        <Tag color="orange">年</Tag>
      </template>

      <div class="py-4 px-4 flex justify-between">
        <CountTo prefix="$" :startVal="1" :endVal="100000" class="text-2xl"/>
        <Icon icon="visit-count|svg" :size="40"/>
      </div>

      <div class="p-2 px-4 flex justify-between">
        <span>退休总资产</span>
        <CountTo prefix="$" :startVal="1" :endVal="1000000"/>
      </div>
    </Card>
    <Card
      size="small"
      title="现有总资产"
      class="md:w-1/4 w-full !md:mt-0 !mt-4"
      :canExpan="false"
    >
      <template #extra>
        <Tag color="purple">15年</Tag>
      </template>

      <div class="py-4 px-4 flex justify-between">
        <CountTo prefix="$" :startVal="1" :endVal="100000" class="text-2xl"/>
        <Icon icon="transaction|svg" :size="40"/>
      </div>

      <div class="p-2 px-4 flex justify-between">
        <span>退休总资产</span>
        <CountTo prefix="$" :startVal="1" :endVal="1000000"/>
      </div>
    </Card>
  </div>
</template>
<script lang="ts" setup>
import {CountTo} from '/@/components/CountTo/index';
import {Icon} from '/@/components/Icon';
import {Card, Tag} from 'ant-design-vue';
import {getStatusData} from "/@/views/rr/dashboard/dashboard.api";
import {onMounted, ref} from "vue";
const loading = ref<Boolean>(false);

const statusData = ref<Map<string, number>>();

onMounted(() => {
  const parameters = {type: '3m'};
  getStatusData(parameters).then((res) => {
    if (res) {
      console.log(`Get Status Data ${JSON.stringify(res)}`)
      statusData.value = res;
    } else {
      console.error('getStatusData error: : ', res);
    }
  });
});
</script>
