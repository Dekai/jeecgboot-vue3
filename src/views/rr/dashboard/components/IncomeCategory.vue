<template>
  <Card title="收入来源" :loading="loading">
    <div ref="chartRef" :style="{width, height}"></div>
  </Card>
</template>

<script lang="ts" setup>
import {Card} from 'ant-design-vue';
import {Ref, ref} from "vue";
import {useECharts} from "/@/hooks/web/useECharts";
import {listAssetCategories} from "/@/views/rr/dashboard/dashboard.api";
import {ChartCategoryItem} from "/@/views/rr/dashboard/type";
import {onMountedOrActivated} from "/@/hooks/core/onMountedOrActivated";


defineProps({
    width: {
      type: String as PropType<string>,
      default: '100%',
    },
    height: {
      type: String as PropType<string>,
      default: '300px',
    },
  }
);
const chartRef = ref<HTMLDataElement | null>(null);
const loading = ref<Boolean>(false);
const {setOptions} = useECharts(chartRef as Ref<HTMLDataElement>);

const initChart = (data: ChartCategoryItem[]) => {
  console.log("Chart Data = " + JSON.stringify(data));
  setOptions({
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
        name: '收入来源',
        type: 'pie',
        radius: '80%',
        center: ['50%', '50%'],
        roseType: 'radius',
        animationType: 'scale',
        animationEasing: 'exponentialInOut',
        data: [
          { value: 500, name: '电子产品' },
          { value: 310, name: '服装' },
          { value: 274, name: '化妆品' },
          { value: 400, name: '家居' },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        animationDelay: function () {
          return Math.random() * 400;
        },
      },
    ],
  });
}

onMountedOrActivated(() => {
  const parameters = {type: '3m'};
  console.log("Loading =" + loading);
  loading.value = true;
  listAssetCategories(parameters).then((res) => {
    loading.value = false;
    if (res) {
      initChart(res);
    } else {
      console.error('listAssetCategories error: : ', res);
    }
  });
});
</script>

