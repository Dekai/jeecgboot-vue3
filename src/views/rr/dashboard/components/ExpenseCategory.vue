<template>
  <Card title="花销分类" :loading="loading">
    <div ref="chartRef" :style="{width, height}"></div>
  </Card>
</template>

<script lang="ts" setup>
import {Card} from 'ant-design-vue';
import {Ref, ref} from "vue";
import {useECharts} from "/@/hooks/web/useECharts";
import {listExpenseCategories} from "/@/views/rr/dashboard/dashboard.api";
import {ExpenseCategoryItem} from "/@/views/rr/dashboard/type";
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

const initChart = (data: ExpenseCategoryItem[]) => {
  console.log("Chart Data = " + JSON.stringify(data));
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
        name: '支出分类',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '12',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
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
  console.log("Loading =" + loading);
  loading.value = true;
  listExpenseCategories(parameters).then((res) => {
    loading.value = false;
    if (res) {
      initChart(res);
    } else {
      console.error('listExpenseCategories error: : ', res);
    }
  });
});
</script>

