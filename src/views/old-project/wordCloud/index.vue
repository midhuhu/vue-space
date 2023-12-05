<template>
    <div class='flex-grow'>
        <div class="wordCloud" ref="wordCloud" ></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const hotWord = ref([
    '小丑竟是我自己',
    '夺笋啊 ',
    '伤害不高',
    '侮辱性极强',
    '什么是快乐星球',
    '破防了',
    '他急了',
    '普通却自信',
    '爷青回',
    '爷青结',
    '潘嘎之交',
    '一爽',
    '打工人',
    '干饭人',
    '集美',
    '耗子尾汁',
    '不讲武德',
    'U1S1',
    '有内味了',
    '尾款人',
    '我是嫩爹',
]);
const color = ref(['#4f14d5', '#19f6c3', '#030303', '#fecfef', '#f6ce06', '#f5576c', '#0996ef', '#ace54a', '#9b0be3']);
const wordArr = ref<any>([]);
const timer = ref();
const resetTime = ref(0);
const ContainerSize = ref<any>();
const wordCloud = ref()


onMounted(() => {
    dealSpan();
    initWordPods();
    render();
});

const dealSpan = () => {
    let array: any = [];
    hotWord.value.forEach((value) => {
        const spanDom = document.createElement('span') as any;
        spanDom.style.position = 'relative';
        spanDom.style.display = 'inline-block';
        spanDom.style.color = randomColor();
        spanDom.style.fontSize = randomNumber(10, 40) + 'px';
        spanDom.innerHTML = value;
        spanDom.local = {
            position: {
                x: 1,
                y: 1,
            },
            direction: {
                x: 1,
                y: 1,
            },
            velocity: {
                // 每次位移初速度
                x: -0.3 + Math.random(),
                y: -0.3 + Math.random(),
            },
        };
        wordCloud.value.appendChild(spanDom);
        array.push(spanDom);
    });
    wordArr.value = array;
};
const randomColor = () => {
    var colorIndex = Math.floor(color.value.length * Math.random());
    return color.value[colorIndex];
};
const randomNumber = (upperInteger: number, lowerInteger: number) => {
    const choices = upperInteger - lowerInteger + 1;
    return Math.floor(Math.random() * choices + lowerInteger);
};
const render = () => {
    if (resetTime.value < 100) {
        resetTime.value = resetTime.value + 1;
        timer.value = requestAnimationFrame(render.bind(this));
        resetTime.value = 0;
    }
    wordFly();
};
const wordFly = () => {
    wordArr.value.forEach((value: any) => {        
        // 设置运动方向 大于边界或者小于边界的时候换方向
        if (
            value.local.realPos.minx + value.local.position.x < ContainerSize.value.leftPos.x ||
            value.local.realPos.maxx + value.local.position.x > ContainerSize.value.rightPos.x
        )
            value.local.direction.x = -value.local.direction.x;
        if (
            value.local.realPos.miny + value.local.position.y < ContainerSize.value.leftPos.y ||
            value.local.realPos.maxy + value.local.position.y > ContainerSize.value.rightPos.y
        )
            value.local.direction.y = -value.local.direction.y;
        //每次右移1个单位 当方向为负数时就是-1个单位也就是向左移1个单位
        value.local.position.x += value.local.velocity.x * value.local.direction.x;
        value.local.position.y += value.local.velocity.y * value.local.direction.y;
        // 给每个词云加动画过渡
        value.style.transform =
            'translateX(' + value.local.position.x + 'px) translateY(' + value.local.position.y + 'px)';
    });
};
const initWordPods = () => {
    wordArr.value.forEach((value: any) => {
        value.local.realPos = {
            minx: value.offsetLeft,
            maxx: value.offsetLeft + value.offsetWidth,
            miny: value.offsetTop,
            maxy: value.offsetTop + value.offsetHeight,
        };
    });
    ContainerSize.value = getContainerSize();
};
const getContainerSize = () => {
    // 判断容器大小控制词云位置
    const el = wordCloud.value;
    return {
        leftPos: {
            // 容器左侧的位置和顶部位置
            x: el.offsetLeft,
            y: el.offsetTop,
        },
        rightPos: {
            // 容器右侧的位置和底部位置
            x: el.offsetLeft + el.offsetWidth,
            y: el.offsetTop + el.offsetHeight,
        },
    };
};
</script>

<style scoped>
.wordCloud {
    width: 500px;
    height: 500px;
    background-color: #dae4f3;
    margin: auto;
    border-radius: 20px;
}
</style>
