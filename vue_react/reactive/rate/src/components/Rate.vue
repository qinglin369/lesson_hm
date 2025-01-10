<template>
    <div>
    {{ rate }}
    {{ count }}
    {{ props.value }}
    </div>
</template>

<script setup>
// import { ref, defineProps ,computed} from 'vue';
// let count = ref(0)// 组件自有的响应式数据
// // 子组件和父组件不一定是一直绑定， 哪里要用往哪搬
// // 定义props 业务逻辑 消费数据， 不是自身的ref ,而是和父组件绑定
// // 告诉外界， 我需要什么数据， 数据类型是什么
// // 参数数据， 外界传入的， 不是自由的
// let props = defineProps({
//     value:Number
// })
// // 计算属性
// let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
// )
</script>

<style scoped>

</style>