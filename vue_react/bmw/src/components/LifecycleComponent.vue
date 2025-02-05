<template>
    <div>
     <div>
        <p id="count">Lifecycle Component - count:{{ count }}</p>
     </div>
    </div>
</template>

<script setup>
import { 
    defineProps,
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted,
    onBeforeUpdate,
    onUpdated 
} from 'vue';

defineProps({
    count: {
        type: Number,
        required: true
    }
});

// console.log('haha');
//组件会实例化,就像一个类

onMounted(() => {
    // on 某个阶段
    // mounted 挂载
    // 已经完成了挂载
    console.log(document.getElementById('count'),'------')
    console.log('已经完成了挂载')
});

onBeforeMount(() => {
    console.log(document.getElementById('count'),'------')
    console.log('挂载前')
})

onBeforeUnmount(() => {
    console.log('卸载前')
})
onUnmounted(() => {
    console.log('卸载后')
})
onBeforeUpdate(() => {
    console.log('更新前')
})
onBeforeUpdate(() => {
    console.log('更新前')
})


</script>

<style scoped>

</style>