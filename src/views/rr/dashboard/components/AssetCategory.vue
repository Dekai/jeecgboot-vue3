<template>
  <Card title="资产分类" :loading="loading">
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
  setOptions({
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: '1%',
      left: 'center',
    },
    series: [
      {
        color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
        name: '资产分类',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
          formatter(param) {
            return param.name + ' (' + param.percent + '%)';
          }
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '12',
            fontWeight: 'bold',
          },
        },
        data: data,
        animationType: 'scale',
        animationEasing: 'exponentialInOut',
        animationDelay: function () {
          return Math.random() * 100;
        },
      },
    ],
  });
}

onMountedOrActivated(() => {
  const parameters = {type: '3m'};
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

