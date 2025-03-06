<template>
    <div>
        <!-- 显示注入的数据 -->
        <p>接收到的名字: {{ receivedName }}</p>
    </div>
</template>

<script setup>
import { inject } from 'vue'
// 注入数据，通过 key 'name' 匹配
const receivedName = inject('name'); 
</script>

<style scoped>

</style>