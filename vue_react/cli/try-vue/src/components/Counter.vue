<template>
    <!-- 计数器组件的根元素 -->
    <div class="counter">
        <!-- 显示当前计数的段落 -->
        <p>Count:{{ count }}</p>
        <!-- 点击按钮增加计数的按钮 -->
        <button @click="increment">+1</button>
        <!-- 按钮旁边的文本 -->
        计数
    </div>
</template>

<script setup>
// 导入 Vue 的 ref 函数
import { ref } from 'vue';

// 创建一个响应式的 count 变量，初始值为 0
const count = ref(0);

// 定义一个函数，每次调用时将 count 变量的值增加 1
const increment = () => {
    count.value++;
};
</script>

<style>
/* 计数器组件的样式 */
.counter {
    /* 文本居中对齐 */
    text-align: center;
    /* 上外边距为 50px */
    margin-top: 50px;
}

/* 按钮的样式 */
.button {
    /* 内边距为 10px 20px */
    padding: 10px 20px;
    /* 字体大小为 15px */
    font-size: 15px;
}
</style>
