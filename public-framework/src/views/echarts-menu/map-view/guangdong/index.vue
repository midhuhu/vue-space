<template>
    <div class="echarts">
        <echarts-api :options="options"></echarts-api>
    </div>
</template>

<script lang="ts" setup>
import EchartsApi from '@/components/Assembly/EchartsAPI.vue'

import { onUnmounted, reactive } from 'vue'
import gd from '@/assets/json/gd.json'
import * as echarts from 'echarts'
/**
 * 地图注册
 */
void 0; (() => {
    echarts.registerMap('gd', gd as Parameters<typeof echarts.registerMap>[1])
})()
const options = reactive({
    geo3D: {
        map: 'gd',
        // viewControl: {
        //     center: [-10, 0, 10],
        //     autoRotate: true
        // },
        light: {
            main: {
                intensity: 1,
                // shadow: true,
                alpha: 120,
                beta: 80
            },
        },
        environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 配置为垂直渐变的背景
            offset: 0,
            color: 'black' // 天空颜色
        }, {
            offset: 0.7,
            color: 'black' // 地面颜色
        }, {
            offset: 1,
            color: 'black' // 地面颜色
        }], false),
        itemStyle: {
            borderColor: 'rgb(62,215,213)',
            areaColor: '#4490fc',
            borderWidth: 1
        },
    },

    series: [
        {
            type: 'bar3D',
            coordinateSystem: 'geo3D',
            bevelSize: 0,
            tooltip: { //提示框的内容
                formatter: function (data: { name: string; value: string[]; }) {
                    return 'name:' + data.name + '<br />' + 'value:' + data.value[2];
                }
            },
            label: {
                show: true,
                formatter: '{b}',
                position: 'top',
                textStyle: {
                    color: '#000',
                    backgroundColor: '#fff',
                }
            },
            shading: 'lambert',
            data: [{
                "name": "阳江市",
                "value": [
                    111.989062,
                    21.858167,
                    100
                ],
                itemStyle: {
                    color: '#17e3ff',
                    opacity: 1
                },
            },
                {
                    "name": "惠州市",
                    "value": [
                        114.42356,
                        23.113434,
                        100,
                    ],
                    itemStyle: {
                        color: '#fffe00',
                        opacity: 1
                    },
                },
                {
                    "name": "清远市",
                    "value": [
                        113.057866,
                        23.690082,
                        100,
                    ],
                    itemStyle: {
                        color: '#18d0ff',
                        opacity: 1
                    },
                },
                {
                    "name": "梅州市",
                    "value": [
                        116.126091,
                        24.291806,
                        100,
                    ],
                    itemStyle: {
                        color: '#e94971',
                        opacity: 1
                    },
                },
                {
                    "name": "湛江市",
                    "value": [
                        110.358655,
                        21.280766,
                        100,
                    ],
                    itemStyle: {
                        color: '#634fd4',
                        opacity: 1
                    },
                },
            ],
        }
    ]
})
</script>

<style lang="less" scoped>
.echarts {
    width: 100%;
    height: 100%;
}
</style>
