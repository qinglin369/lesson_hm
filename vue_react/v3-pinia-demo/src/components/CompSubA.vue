<template>
    <div>
     count:
     {{ count }}
     <hr>
     <button @click="increment">CompSubA:add</button>
    </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore();// 本地和中央连接的过程·
const { count } = toRefs(counterStore);
const { increment } = counterStore;
</script>

<style scoped>

</style>