<template>
    <div>
      <!-- 使用 keep-alive 包裹 router-view 以实现页面缓存 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <div class="footer h-12">
        <TabBar class="fixed bottom-0"></TabBar>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import TabBar from '../components/Home/TabBar.vue';
  </script>
  
  <style scoped>
  
  </style>