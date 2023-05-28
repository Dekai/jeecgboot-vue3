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
  const totalVolume = ref<number>(0);

  const initChart = (data: ChartCategoryItem[]) => {
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
          name: '花销分类',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '45%'],
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          startAngle: 180,
          label: {
            show: true,
            formatter(param) {
              // correct the percentage
              return param.name + ' (' + param.percent + '%)';
            }
          },
          data: [
            ...data,
          ]
        }
      ]
    });
  };

  const buildChartData = (responseData: ChartCategoryItem[]) => {
    totalVolume.value = responseData.reduce((sum, item) => sum + item.value, 0);
  }

  onMountedOrActivated(() => {
    const parameters = {type: '3m'};
    loading.value = true;
    listExpenseCategories(parameters).then((res) => {
      loading.value = false;
      if (res) {
        buildChartData(res);
        initChart(res);
      } else {
        console.error('listExpenseCategories error: : ', res);
      }
    });
  });
</script>

