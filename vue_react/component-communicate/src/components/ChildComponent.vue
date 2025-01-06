<template>
    <div>
    <h2>{{ title }}</h2>
    <button @click="sendMessageToParent">发消息给父组件</button>
    </div>
</template>

<script setup>
import { 
    defineProps ,
    defineEmits,
    ref
} from 'vue'

const childMessage = ref('hello,parent!')

defineProps ({
    title: {
        type: String,
        required: true
    }
    
})
// emits 汇报 触发
// 子组件可能向多个父组件通信
const emits = defineEmits(['child-message'])//用数组，可能有多个事件
const sendMessageToParent = () => {
    emits('child-message',childMessage.value)
}
</script>

<style scoped>

</style>