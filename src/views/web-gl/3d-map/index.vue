<template>
    <div>
        1111
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppStore } from '../../../store/modules';

const app = useAppStore();
onMounted(() => {
    // app.setContentFull(true)
})
</script>

<style scoped>

</style>