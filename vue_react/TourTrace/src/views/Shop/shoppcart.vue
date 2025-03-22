<template>
    <div class="container">
      <h1>在线商店</h1>
      <div class="layout">
        <ProductList />
        <ShoppingCart />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
 import ProductList from '@/components/Shopping-Cart/ProductList.vue';
  import ShoppingCart from '@/components/Shopping-Cart/ShoppingCart.vue';
  </script>
  
  <style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }
  
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
    align-items: start;
  }
  </style>