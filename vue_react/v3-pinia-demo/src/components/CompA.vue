<template>
    <div>
      <h2>CompA</h2>
      <p>count: {{counterStore.count }}</p>
      <button @click="increment">CompA:Add</button>
      <hr>
      <ComPSubA />
    </div>
  </template>
  
  <script setup>
 
  import ComPSubA from './CompSubA.vue';
  // 引入中央模块
  import { useCounterStore } from '../store/counter'; 
  const counterStore = useCounterStore();
  
  const { count, increment } = counterStore;
  
 
  </script>
  
  <style scoped>
  
  </style>