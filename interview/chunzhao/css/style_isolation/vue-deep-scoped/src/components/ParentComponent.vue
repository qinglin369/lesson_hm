<template>
    <div class="parent">
        <h2>这是父组件的标题</h2>
        <ChildComponent />
        <ModuleComponent />
    </div>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';
import ModuleComponent from './ModuleComponent.vue';
</script>

<style  scoped>
.parent h2 {
    color:blue;
}
.parent >>> .child p {
    color: red;
}
</style>