<template>
    <div>
        <ExposeChild ref="comp"/>
        <button @click="handleClick">点击访问子组件</button>
        <hr>
        {{ childName }}
        <hr>
        {{ someMethod }}
        <hr>
    </div>
</template>

<script setup>
import ExposeChild from './ExposeChild.vue';
import { ref } from 'vue';
const comp = ref(null);
const childName = ref('');
const someMethod = ref('');
const handleClick = () => {
    console.log(comp.value.childName);
    const result = comp.value.someMethod();
    someMethod.value = result;
    childName.value = comp.value.childName;
}
</script>

<style lang="scss" scoped>

</style>