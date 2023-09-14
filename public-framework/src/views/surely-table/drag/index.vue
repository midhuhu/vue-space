<template>
    <s-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
        :scroll="{ y: 500, x: 2000 }"
    >
        <template #bodyCell="{ column }">
            <template v-if="column.key === 'operation'">
                <a>Action</a>
            </template>
        </template>
    </s-table>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import {STable} from "@surely-vue/table";

interface DataItem {
    key: number;
    name: string;
    age: number;
    address: string;
}

const columns = ref<Record<string, any>[]>([
    {
        title: 'Full Name',
        dataIndex: 'name',
        fixed: 'left',
        width: 150,
        resizable: true,
        rowDrag: true,
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        fixed: 'left',
        width: 100,
        resizable: true,
        key: 'age',
    },
    {
        title: 'Column 1（minWidth： 100， maxWidth： 500）',
        dataIndex: 'address',
        key: 'address1',
        minWidth: 100,
        maxWidth: 500,
        resizable: true,
    },
    {
        title: 'Column 2',
        key: 'address2',
        dataIndex: 'address',
    },
    {
        title: 'Column 3',
        key: 'address3',
        dataIndex: 'address',
    },
    {
        title: 'Column 4',
        key: 'address4',
        dataIndex: 'address',
    },
    {title: 'Column 5', dataIndex: 'address', key: 'address5'},
    {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        resizable: true,
    },
]);

const data: DataItem[] = [];

const init = () => {
    for (let i = 0; i < 1000; i++) {
        data.push({
            key: i,
            name: `Edrward ${i}`,
            age: i + 1,
            address: `London Park no. ${i}`,
        });
    }
}
init()


</script>

