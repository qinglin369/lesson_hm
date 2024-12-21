<template>
    <div class="counter">
        <!-- focus 业务的 数据驱动思想 -->
    <p>Count:{{ count }}</p>
    <button @click="increment">+1</button>
        计数
    </div>
</template>
<script setup>
import{
    ref
} from 'vue'
const count = ref(0)

const increment = () => {
    count.value++
}
</script>
<style>
.counter{
    text-align: center;
    margin-top: 50px;
}
.button{
   padding: 10px,20px;
   font-size: 15px;
}
</style>