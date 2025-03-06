<template>
    <div>
        <ProvideChild />
    </div>
</template>

<script setup>
import ProvideChild from './ProvideChild.vue';
import { provide } from 'vue'
provide('name','旅梦');// key value
</script>

<style lang="scss" scoped>

</style>