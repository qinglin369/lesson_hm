<template>
    <div>
      PostIndex
      {{ sort }}
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  sort: String
})
// 解构
const {sort} = props;// 可读性
</script>

<style lang="scss" scoped>

</style>