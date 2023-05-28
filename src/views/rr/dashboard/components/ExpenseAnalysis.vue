<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts" setup>
import {ref, Ref} from 'vue';
import {useECharts} from '/@/hooks/web/useECharts';
import {basicProps} from './props';
import {onMountedOrActivated} from "/@/hooks/core/onMountedOrActivated";
import {ChartCategoryItem} from "/@/views/rr/dashboard/type";
import {listMonthExpense} from "/@/views/rr/dashboard/dashboard.api";

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
        lineStyle: {
          width: 1,
          color: '#019680',
        },
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          type: 'solid',
          color: 'rgba(226,226,226,0.5)',
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: [
      {
        type: 'value',
        max: 80000,
        splitNumber: 4,
        axisTick: {
          show: false,
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(255,255,255,0.2)', 'rgba(226,226,226,0.2)'],
          },
        },
      },
    ],
    grid: {left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true},
    series: [
      {
        smooth: true,
        data: data,
        type: 'line',
        areaStyle: {},
        itemStyle: {
          color: '#5ab1ef',
        },
      },
    ],
  });
};

onMountedOrActivated(() => {
  const parameters = {type: '3m'};
  listMonthExpense(parameters).then((res) => {
    if (res) {
      initChart(res);
    } else {
      console.error('listMonthExpense error: : ', res);
    }
  });
});
</script>
