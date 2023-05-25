<template>
  <Card title="收入来源" :loading="loading">
    <div ref="chartRef" :style="{width, height}"></div>
  </Card>
</template>

<script lang="ts" setup>
import {Card} from 'ant-design-vue';
import {Ref, ref} from "vue";
import {useECharts} from "/@/hooks/web/useECharts";
import {listIncomeCategories} from "/@/views/rr/dashboard/dashboard.api";
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
const totalValue = ref<number>(0);
const initChart = (data: ChartCategoryItem[]) => {
  console.log("Chart Data = " + JSON.stringify(data));
  setOptions({
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '1%',
      left: 'center',
      // doesn't perfectly work with our tricks, disable it
      selectedMode: false
    },
    series: [
      {
        name: '收入来源',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '70%'],
        // adjust the start angle
        startAngle: 180,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + ' (' + param.percent * 2 + '%)';
          }
        },
        data: [
          ...data,
          {
            // make an record to fill the bottom 50%
            value: totalValue,
            itemStyle: {
              // stop the chart from rendering this piece
              color: 'none',
              decal: {
                symbol: 'none'
              }
            },
            label: {
              show: false
            }
          }
        ]
      },
    ]
  });
}

const buildChartData = (responseData: ChartCategoryItem[]) => {
  totalValue.value = responseData.reduce((sum, item) => sum + item.value, 0);
}

onMountedOrActivated(() => {
  const parameters = {type: '3m'};
  console.log("Loading =" + loading);
  loading.value = true;
  listIncomeCategories(parameters).then((res) => {
    loading.value = false;
    if (res) {
      buildChartData(res);
      initChart(res);
    } else {
      console.error('listIncomeCategories error: : ', res);
    }
  });
});
</script>

