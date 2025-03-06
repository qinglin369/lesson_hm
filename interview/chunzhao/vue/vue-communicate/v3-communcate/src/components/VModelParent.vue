<template>
  <div>
      <!-- 使用 v-model:modelValue 进行双向绑定 -->
      <VModelChild v-model:modelValue="value" />
      <!-- 显示当前 value 的值 -->
      <p>当前值: {{ value }}</p>
      <button @click="updatevalue">按钮4</button>
  </div>
</template>

<script setup>
import VModelChild from "./VModelChild.vue"
import { ref } from "vue"

// 定义响应式变量 value 并初始化为 'hello'
const value = ref('hello')
const updatevalue = () => {
  value.value = 'world'
}
</script>

<style scoped>

</style>