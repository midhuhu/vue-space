<template>
    <div class="echarts">
        <echarts-api :options="options"></echarts-api>
    </div>
</template>

<script lang="ts" setup>
import EchartsApi from '@/components/Assembly/EchartsAPI.vue'

import { reactive } from 'vue'
import china from '@/assets/json/china.json'
import * as echarts from 'echarts'
/**
 * 地图注册
 */
void 0; (() => {
    echarts.registerMap('china', china as Parameters<typeof echarts.registerMap>[1])
})()
    const outname = [
        '南海诸岛',
        '北京',
        '天津',
        '上海',
        '重庆',
        '河北',
        '河南',
        '云南',
        '辽宁',
        '黑龙江',
        '湖南',
        '安徽',
        '山东',
        '新疆',
        '江苏',
        '浙江',
        '江西',
        '湖北',
        '广西',
        '甘肃',
        '山西',
        '内蒙古',
        '陕西',
        '吉林',
        '福建',
        '贵州',
        '广东',
        '青海',
        '西藏',
        '四川',
        '宁夏',
        '海南',
        '台湾',
        '香港',
        '澳门',
    ];
    const outvalue = [
        0,
        524,
        13,
        140,
        75,
        13,
        83,
        11,
        19,
        15,
        69,
        260,
        39,
        4,
        31,
        104,
        36,
        1052,
        33,
        347,
        9,
        157,
        22,
        4,
        18,
        5,
        2398,
        41,
        0,
        484,
        404,
        22,
        3,
        5,
        225,
    ];
    const outdata = [];
    const unit = '万元';
    const datas = {
        黑龙江: {
            research: 1000,
            order: 2400,
            repair: 200,
        },
    };
    for (let i = 0; i < outname.length; i++) {
        outdata.push({
            name: outname[i],
            value: outvalue[i],
        });
    }
const options = reactive({
    tooltip: {
            show: true,
            enterable: true, //鼠标可进入浮层内
            // triggerOn: "click", // 点击触发
            backgroundColor: 'white',
            padding: 10,
            extraCssText:
                'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);border-radius: 24px;opacity: 0.8;border: 2px solid white;width: 274px;height: 193px;',
            textStyle: {
                color: 'red',
            },
            formatter: function (params: { name: string | number; }) {
                return `
              <ul class="map-tooltip">
                <li class="title">
                  <p class="circle"></p>
                  <p class="province">省份</p>
                  <p class="province-name">${params.name}</p>
                </li>
                <li>
                  <p class="name">科研费:</p>
                  <p class="color" style="color:#048AFC">${
                      (datas[params.name] && datas[params.name].research) || 0
                  }${unit}</p>
                </li>
                <li>
                  <p class="name">订购费:</p>
                  <p class="color" style="color:#F98519">${
                      (datas[params.name] && datas[params.name].order) || 0
                  }${unit}</p>
                </li>
                <li>
                  <p class="name">维修费:</p>
                  <p class="color" style="color:#04BFFC">${
                      (datas[params.name] && datas[params.name].repair) || 0
                  }${unit}</p>
                </li>
              </ul>
            `;
            },
        },
        geo: [
            // 灰色底geo
            {
                map: 'china',
                show: true,
                roam: false,
                /*地区样式排除*/
                regions: [
                    {
                        name: '南海诸岛',
                        value: 0,
                        itemStyle: {
                            normal: {
                                opacity: 0,
                                label: {
                                    show: false,
                                },
                            },
                        },
                    },
                ],
                layoutSize: '100%',
                // 偏移
                // center: [104.2, 36.1],
                itemStyle: {
                    normal: {
                        borderColor: '#CADBF4',
                        borderWidth: 8,
                        areaColor: '#CADBF4',
                    },
                    emphasis: {
                        areaColor: '#CADBF4',
                    },
                },
                label: {
                    emphasis: {
                        show: false,
                    },
                },
            },
            // 白色边框geo
            {
                map: 'china',
                show: true,
                roam: false,
                /*区域样式排除*/
                regions: [
                    {
                        name: '南海诸岛',
                        value: 0,
                        itemStyle: {
                            normal: {
                                opacity: 0,
                                label: {
                                    show: false,
                                },
                            },
                        },
                    },
                ],
                label: {
                    emphasis: {
                        show: false,
                    },
                },
                layoutSize: '100%',
                // 偏移
                aspectScale: 0.76,
                itemStyle: {
                    normal: {
                        borderColor: 'white',
                        borderWidth: 4,
                        areaColor: '#CADBF4',
                    },
                    emphasis: {
                        areaColor: '#CADBF4',
                    },
                },
            },
        ],
        series: [
            {
                type: 'map',
                map: 'china',
                aspectScale: 0.75,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        borderColor: '#F6FBFE',
                        borderWidth: 0.8,
                        areaColor: {
                            type: 'linear-gradient',
                            x: 0,
                            y: 900,
                            x2: 300,
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 0.5,
                                    color: '#5FACF2', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#B2F5F0', // 100% 处的颜色B3F6F0
                                },
                            ],
                            global: true, // 缺省为 false
                        },
                    },
                    emphasis: {
                        show: false,
                    },
                },
                data: outdata,
            },
        ],
})

</script>

<style lang="less" scoped>
.echarts {
    width: 100%;
    height: 100%;
}
</style>