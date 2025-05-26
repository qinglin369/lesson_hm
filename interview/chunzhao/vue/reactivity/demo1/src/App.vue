<template>
    <div>
    </div>
</template>

<script setup>
import { effect } from './reactivity/effect';
import { ref } from "./reactivity/ref"
import { reactive } from "./reactivity/reactive"

const count = ref(0)
const person = reactive({
    age:10,
    name:'狗剩'
})
setTimeout(()=>{
    count.value = 10;
    person.age = 18;
},3000)

effect(()=>{
    console.log(count.value,'依赖执行了ref')
})

effect(()=>{
    console.log(person.age,'依赖执行了reactive')
})



</script>

<style  scoped>

</style>