<template>
    <div>
        ExposeChild

    </div>
</template>

<script setup>
defineExpose({
    childName: '子组件属性被访问了:child',
    someMethod() {
        console.log('父组件成功访问子组件方法','someMethod');
        return '这是子组件的方法,被父组件访问了'
    }
})
</script>

<style lang="scss" scoped>

</style>