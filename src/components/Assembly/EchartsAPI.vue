<template>
    <div class="echart" ref="chartDom"></div>
</template>

<script setup lang="ts" scoped>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { markRaw } from 'vue';
import 'echarts-gl';

const chartDom = ref();
const chartApi = ref();
const props = defineProps({
    options: {
        type: Object,
        required: true,
    },
});
const resizeHandler = () => {
    chartApi.value.resize();
};

const resize = new ResizeObserver((entries) => {
    entries.forEach(resizeHandler);
});

onMounted(() => {
    chartApi.value = markRaw(echarts.init(chartDom.value));
    chartApi.value.setOption(props.options, true);
    resize.observe(chartDom.value);
});

onUnmounted(() => {
    resize.disconnect();
});

watch(
    () => props.options,
    (newOptions) => {
        chartApi.value.setOption(newOptions);
    },
    { deep: true },
);
</script>

<style lang="less" scoped>
.echart {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
</style>
