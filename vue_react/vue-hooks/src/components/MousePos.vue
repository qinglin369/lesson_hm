<!-- 这个组件只要关注界面，超简洁 -->
<template>
    
    <div>
      <p>Mouse X: {{ x }}</p>
      <p>Mouse Y: {{ y }}</p>
    </div>
</template>

<script setup>
import  { useMouse, useMemo }  from'../hooks/useMouse.js'
import Hook from '../hooks/useMouse'
const{ x, y } = useMouse()
useMemo()

console.log(Hook)
</script>

<style  scoped>

</style>