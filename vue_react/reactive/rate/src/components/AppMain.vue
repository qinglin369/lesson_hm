<template>
    <main>
        Main
       <!-- <h1>你的评分是： {{ score }}</h1>
       <Rate :value="score"/> -->
        <Item />
        <Item />
    </main>
</template>

<script setup>
// import Rate from './Rate.vue'
// import { ref } from 'vue'
// // 将数据 从父组件 传递给子组件
// const rate = ref(3)
// const score = ref(3)
import Item from './Item.vue'
</script>

<style  scoped>
main {
    flex:1;
    height:500px;
    background-color: rgb(200, 255, 0);
}
</style>