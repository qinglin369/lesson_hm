<template>
    <div>
        ParentTwo
        <ChildTwo :msg2="msg2"  />
    </div>
   
</template>

<script setup>
import ChildTwo from './ChildTwo.vue'
import { ref , reactive } from 'vue'

const msg2 = ref("这是传给子组件的信息2")

// const msg1 = reactive({
//   msg1: "这是传给子组件的信息1"
// })
</script>

<style  scoped>

</style>