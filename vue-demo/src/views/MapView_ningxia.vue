<template>
    <div class="echarts">
        <echarts-api :options="options"></echarts-api>
    </div>
</template>

<script lang="ts" setup>
import EchartsApi from '@/components/Assembly/EchartsAPI.vue'

import { reactive } from 'vue'
import ningxia from '@/assets/json/ningxia.json'
import * as echarts from 'echarts'
/**
 * 地图注册
 */
void 0; (() => {
    echarts.registerMap('ningxia', ningxia as Parameters<typeof echarts.registerMap>[1])
})()
const datas = reactive([{
    name: '中卫市',
    longitude: 105.189568,
    latitude: 37.514951,
    num: 4,
    except_num: 3
},
{
    name: '石嘴山市',
    longitude: 106.376173,
    latitude: 39.01333,
    num: 4,
    except_num: 1
},
{
    name: '银川市',
    longitude: 106.278179,
    latitude: 38.46637,
    num: 4,
    except_num: 0
}
])
const options = reactive({
    // backgroundColor: '#fff',
    // tooltip: {
    //     trigger: 'item',
    //     formatter: function (params: { name: any; value: any; }, ticket: any, callback: any) {
    //         //根据业务自己拓展要显示的内容
    //         const name = params.name;
    //         const value = params.value;
    //         let res = "";
    //         res += "<span>" + name + "</span>";
    //         res += "<br>履职人次:" + value[2];
    //         return res;
    //     }
    // },
    geo3D: {
        map: 'ningxia',
        // 每个区域的高度
        regionHeight: 3,
        // 三维地理坐标系组件在三维场景中的深度
        boxDepth: 'auto',
        // 配置为垂直渐变的背景
        environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#00aaff' // 天空颜色
            }, {
                offset: 0.7, color: '#998866' // 地面颜色
            }, {
                offset: 1, color: '#998866' // 地面颜色
            }], false),
        groundPlane: {
            // 是否显示地面
            show: false,
        },
        // 标签的字体样式
        label: {
            show: true,
            textStyle: {
                color: '#FFF'
            }
        },
        itemStyle: {
            color: '#4bbdd7',
            areaColor: '#4bbdd7',
            borderColor: '#fff',
            borderWidth: 1,
        },
        emphasis: {
            label: {
                show: true,
                itemStyle: {
                    color: '#FFF'
                }
            },
        },
        // 地图着色
        shading: 'realistic',
        // 材质包
        realisticMaterial: {
            // detailTexture: '111'
        },
        postEffect: {
            // 是否开启后处理特效
            enable: false
        },
        viewControl: {
            projection: 'perspective',
            autoRotate: false,
            distance: 180,
            beta: 0,
        }

    },
    series: [{
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        data: [],
        symbol: 'rect',
        symbolSize: function (val: number[]) {
            return val[4] == 0 ? 0 : [6, 10 + val[4] * 10];
        },
        symbolOffset: [0, "-50%"],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                color: function (val: { value: any[]; }) {
                    const color = val.value[3];
                    return color;
                }
            }
        },
        zlevel: 1
    }
    ]
})
echarts.util.each(datas, (item) => {
    const color = item.except_num == 0 ? "#2afe2e" : "#ed130d";
    options.series[0].data.push({
        name: item.name,
        value: [item.longitude, item.latitude, item.num, color, item.except_num]
    });
});
</script>

<style lang="less" scoped>
.echarts {
    width: 100%;
    height: 100%;
}
</style>