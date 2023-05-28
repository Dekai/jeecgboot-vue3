<template>
  <Card :tab-list="tabListTitle" v-bind="$attrs" :active-tab-key="activeKey" @tabChange="onTabChange">
    <p v-if="activeKey === 'tab1'">
      <VisitAnalysis />
    </p>
    <p v-if="activeKey === 'tab2'">
      <VisitAnalysisBar />
    </p>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import VisitAnalysis from './ExpenseAnalysis.vue';
  import VisitAnalysisBar from './ExpenseAnalysisBar.vue';

  const activeKey = ref('tab1');

  const tabListTitle = [
    {
      key: 'tab1',
      tab: '花销趋势',
    },
    {
      key: 'tab2',
      tab: '花销比例',
    },
  ];

  function onTabChange(key) {
    activeKey.value = key;
  }
</script>
