<template>
    <div>
      <h2>CompA</h2>
      <p>count: {{ counterStore.count }}</p>
      <button @click="increment">Add</button>
      <ComPSubA />
    </div>
  </template>
  
  <script setup>
 
  import ComPSubA from './CompSubA.vue';
  // 引入中央模块
  import { useCounterStore } from '../store/counter'; 
  const counterStore = useCounterStore();
  console.log(counterStore)
  const { count, increment } = counterStore;
  
 
  </script>
  
  <style scoped>
  
  </style>