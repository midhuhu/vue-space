
<template>
    <n-table :bordered="false" :single-line="false">
        <thead>
            <tr>
                <th>名称</th>
                <th>函数</th>
                <th>目标值</th>
                <th>结果</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>获取数据类型</td>
                <td>getType</td>
                <td>11</td>
                <td>{{ utils.getType(11) }}</td>
            </tr>
            <tr>
                <td>获取终端OS</td>
                <td>getOsType</td>
                <td></td>
                <td>{{ utils.getOsType() }}</td>
            </tr>
            <tr>
                <td>效验MD5</td>
                <td>isMd5</td>
                <td>asdf54568as54asd458as</td>
                <td>{{ utils.isMd5('asdf54568as54asd458as') }}</td>
            </tr>
            <tr>
                <td>效验是否为版本号</td>
                <td>isVersion</td>
                <td>10.5.65</td>
                <td>{{ utils.isVersion('10.5.65') }}</td>
            </tr>
            <tr>
                <td>强密码类型效验</td>
                <td>isComplexPassword</td>
                <td>2023@zzzLQ</td>
                <td>{{ utils.isComplexPassword('2023@zzzLQ') }}</td>
            </tr>
            <tr>
                <td>横线命名转小驼峰格式</td>
                <td>getHumpCode</td>
                <td>mid-uti1s</td>
                <td>{{ utils.getHumpCode('mid-uti1s') }}</td>
            </tr>
            <tr>
                <td>小驼峰命名转横线格式</td>
                <td>getLineCode</td>
                <td>midUti1s</td>
                <td>{{ utils.getLineCode('midUti1s@zzzLQ') }}</td>
            </tr>
            <tr>
                <td>首字母大写</td>
                <td>getCapitalize</td>
                <td>zzzLQ</td>
                <td>{{ utils.getCapitalize('zzzLQ') }}</td>
            </tr>
            <tr>
                <td>身份证号码效验</td>
                <td>checkIdentityId</td>
                <td>34117558479685478</td>
                <td>{{ utils.checkIdentityId('34117558479685478') }}</td>
            </tr>
            <tr>
                <td>数字转中文</td>
                <td>numberChinese</td>
                <td>2023</td>
                <td>{{ utils.numberChinese(2023) }}</td>
            </tr>
            <tr>
                <td>格式化CSS样式代码</td>
                <td>formatCss</td>
                <td>.test{ width: 100px; height: 100px;}</td>
                <td>{{ utils.formatCss('.test{ width: 100px; height: 100px;}') }}</td>
            </tr>
            <tr>
                <td>生成指定范围内的随机数字</td>
                <td>randomNumber</td>
                <td>(5, 10)</td>
                <td>{{ utils.randomNumber(5, 10) }}</td>
            </tr>
            <tr>
                <td>数字千分位分割</td>
                <td>formatThousands</td>
                <td>2023254799814</td>
                <td>{{ utils.formatThousands(2023254799814) }}</td>
            </tr>
            <tr>
                <td>手机号中间四位变成*</td>
                <td>telFormat</td>
                <td>13605663319</td>
                <td>{{ utils.telFormat(13605663319) }}</td>
            </tr>
            <tr>
                <td>校验身份证号码是否合法-Pro</td>
                <td>checkIdentityIdPro </td>
                <td>314879199803147895</td>
                <td>{{ utils.checkIdentityIdPro('314879199803147895') }}</td>
            </tr>
            <tr>
                <td>是否包含中文</td>
                <td>haveCNChars </td>
                <td>你好12138</td>
                <td>{{ utils.haveCNChars('你好12138') }}</td>
            </tr>
            <tr>
                <td>是否是正确的邮箱</td>
                <td>isEmail </td>
                <td>12138@qq.com</td>
                <td>{{ utils.isEmail('12138@qq.com') }}</td>
            </tr>
        </tbody>
    </n-table>
</template>

<script setup lang="ts">
import utils from 'mid-uti1s'


</script>

<style scoped lang="less">
</style>
