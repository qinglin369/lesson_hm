<template>
    <div>
     <Child ref="comp" />
     <button @click="handlerClick">按钮</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
const comp = ref(null);// 标记DOM 元素
const title = ref('hello'); // 标记数据 null 表示组件还没有挂载 DOM也不在
const handlerClick = () => {
  console.log(comp.value.childName);
  comp.value.someMethod();
}
//   console.log(title);

</script>

<style  scoped>

</style>