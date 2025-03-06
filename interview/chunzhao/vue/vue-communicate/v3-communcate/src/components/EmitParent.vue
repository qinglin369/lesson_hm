<template>
    <div>
        <!-- 监听 myClick 事件，调用 onMyClick 方法 -->
        <EmitChild @myClick="onMyClick" />
       来自子组件消息: {{ receivedMessage }}
    </div>
</template>

<script setup>
import { ref } from 'vue'
import EmitChild from './EmitChild.vue'
const receivedMessage = ref('')
// 定义 onMyClick 方法
const onMyClick = (message) => {
    console.log('接收到子组件的消息:', message)
    receivedMessage.value = message
}
</script>

<style lang="scss" scoped>

</style>