<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts" setup>
import {ref, Ref} from 'vue';
import {useECharts} from '/@/hooks/web/useECharts';
import {basicProps} from './props';
import {listMonthExpenseBar} from "/@/views/rr/dashboard/dashboard.api";
import {onMountedOrActivated} from "/@/hooks/core/onMountedOrActivated";
import {ChartCategoryItem} from "/@/views/rr/dashboard/type";

defineProps({
  ...basicProps,
});

const chartRef = ref<HTMLDivElement | null>(null);
const {setOptions} = useECharts(chartRef as Ref<HTMLDivElement>);

const initChart = (data: ChartCategoryItem[]) => {
  setOptions({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: data
  });
};

const buildChartData = (responseData: Map<string, number[]>) => {
  const dataArray = [];
  console.log("responseData" + JSON.stringify(responseData));
  for (const key in responseData) {
    if (responseData.hasOwnProperty(key)) {
      const dataItem = {
        name: key,
        type: 'bar',
        stack: 'Expense',
        emphasis: {
          focus: 'series'
        },
        data: responseData[key]
      };
      dataArray.push(dataItem);
    }
  }
  console.log("dataArray" + dataArray);
  return dataArray;
};

onMountedOrActivated(() => {
  const parameters = {type: '3m'};
  listMonthExpenseBar(parameters).then((res) => {
    if (res) {
      const dataArray = buildChartData(res);
      initChart(dataArray);
    } else {
      console.error('listMonthExpenseBar error: : ' + res);
    }
  });
})
</script>
