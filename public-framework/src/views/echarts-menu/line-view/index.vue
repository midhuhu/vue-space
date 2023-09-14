<template>
    <div class="echarts">
        <div class="test">
            <div>饼图</div>
            <echarts-api :options="options"></echarts-api>
        </div>
        <div class="test">
            <div>折线图</div>
            <echarts-api :options="options2"></echarts-api>
        </div>
        <div class="test" :span="2">
            <div>伪3d柱状图</div>
            <echarts-api :options="options3"></echarts-api>
        </div>
        <div class="test" :span="2">
            <echarts-api :options="options4"></echarts-api>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import EchartsApi from '@/components/Assembly/EchartsAPI.vue';
import * as echarts from 'echarts';
import map from '@/assets/json/map.json';

// options1 图表
const data = reactive([
    { value: 1048, name: 'Search Engine' },
    { value: 888, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' },
]);

setTimeout(() => {
    data.push({ value: 100, name: 'Other' });
}, 3000);
setTimeout(() => {
    data[3].value = 2000;
}, 5000);

const options = reactive({
    title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        left: 'right',
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: data,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
});

// options2 图表
let base = +new Date(1968, 9, 3);
const oneDay = 24 * 3600 * 1000;
const date = [];
const data2 = [Math.random() * 300];
for (let i = 1; i < 20000; i++) {
    const now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data2.push(Math.round((Math.random() - 0.5) * 20 + data2[i - 1]));
}
const options2 = reactive({
    tooltip: {
        trigger: 'axis',
        position: function (pt: unknown[]) {
            return [pt[0], '10%'];
        },
    },
    title: {
        left: 'center',
        text: 'Large Area Chart',
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none',
            },
            restore: {},
            saveAsImage: {},
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 10,
        },
        {
            start: 0,
            end: 10,
        },
    ],
    series: [
        {
            name: 'Fake Data',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)',
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 158, 68)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(255, 70, 131)',
                    },
                ]),
            },
            data: data2,
        },
    ],
});

/**
 * options3 图表
 */
const offsetX = 20;
const offsetY = 10;
// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x, shape.y];
        const c1 = [shape.x - offsetX, shape.y - offsetY];
        const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
        const c3 = [xAxisPoint[0], xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1])?.lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x, shape.y];
        const c2 = [xAxisPoint[0], xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
        const c4 = [shape.x + offsetX, shape.y - offsetY];
        ctx.moveTo(c1[0], c1[1])?.lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const c1 = [shape.x, shape.y];
        const c2 = [shape.x + offsetX, shape.y - offsetY]; //右点
        const c3 = [shape.x, shape.y - offsetX];
        const c4 = [shape.x - offsetX, shape.y - offsetY];
        ctx.moveTo(c1[0], c1[1])?.lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);

const VALUE = [100, 200, 300, 400, 300, 200, 100];
const options3 = reactive({
    //  backgroundColor: '#012366',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params: { name: string; value: string }[]) {
            const item = params[1];
            return item.name + ' : ' + item.value;
        },
    },
    grid: {
        left: '10%',
        right: '10%',
        top: '15%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: ['1001', '1002', '1003', '1004', '1005', '1006', '1007'],
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: '#333333',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 14,
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: '#333333',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#333333',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 14,
        },
    },
    series: [
        {
            type: 'custom',
            renderItem: (
                params: any,
                api: {
                    coord: (arg0: any[]) => any;
                    value: (arg0: number) => any;
                },
            ) => {
                const location = api.coord([api.value(0), api.value(1)]);
                return {
                    type: 'group',
                    children: [
                        {
                            type: 'CubeLeft',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#33BCEB',
                                    },
                                    {
                                        offset: 1,
                                        color: '#337CEB',
                                    },
                                ]),
                            },
                        },
                        {
                            type: 'CubeRight',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#28A2CE',
                                    },
                                    {
                                        offset: 1,
                                        color: '#1A57B7',
                                    },
                                ]),
                            },
                        },
                        {
                            type: 'CubeTop',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#43C4F1',
                                    },
                                    {
                                        offset: 1,
                                        color: '#28A2CE',
                                    },
                                ]),
                            },
                        },
                    ],
                };
            },
            data: VALUE,
        },
        {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: (e: { value: string }) => {
                        return e.value + '次';
                    },
                    fontSize: 16,
                    color: '#43C4F1',
                    offset: [0, -25],
                },
            },
            itemStyle: {
                color: 'transparent',
            },
            tooltip: {},
            data: VALUE,
        },
    ],
});

/**
 * 地图注册
 */
void 0;
(() => {
    echarts.registerMap('zhejiang', map as Parameters<typeof echarts.registerMap>[1]);
})();
const options4 = reactive({
    backgroundColor: '#668edd',
    title: {
        text: '鄞州区3D地图',
        textStyle: {
            color: '#fff',
        },
    },
    series: [
        {
            type: 'map3D',
            name: '浙江',
            selectedMode: 'single', //地图高亮单选
            regionHeight: 3, //地图高度
            map: 'zhejiang',
            viewControl: {
                distance: 100, //地图视角 控制初始大小
                rotateSensitivity: [1, 1],
            },
            label: {
                show: true, //是否显示市
                textStyle: {
                    color: '#fff', //文字颜色
                    fontSize: 12, //文字大小
                },
                formatter: (data: { name: string }) => {
                    if (data.name.includes('_hidden')) return ' ';
                    return data.name.replace(/镇$/, '').replace(/街道$/, '');
                },
            },
            itemStyle: {
                color: 'rgb(23, 34, 127)', //地图颜色
                borderWidth: 2, //分界线wdith
                borderColor: 'rgb(54, 117, 242)', //分界线颜色
            },
            emphasis: {
                label: {
                    show: true, //是否显示高亮
                    textStyle: {
                        color: '#fff', //高亮文字颜色
                    },
                },
                itemStyle: {
                    borderWidth: 2,
                    borderColor: 'rgb(54, 117, 242)',
                    color: 'rgb(54, 117, 242)',
                },
            },
            labelLayout: {
                moveOverlap: true,
            },
            data: [],
        },
    ],
});
</script>
<style lang="less" scoped>
.echarts {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    align-items: center;

    .test {
        height: 100%;
        position: relative;
    }

    .test:nth-child(3) {
        grid-row: 2 / 4;
    }

    .test:nth-child(4) {
        grid-row: 2 / 4;
    }
    color: #668edd;
}
</style>
