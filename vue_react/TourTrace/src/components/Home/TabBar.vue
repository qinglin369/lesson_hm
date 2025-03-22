<template>
  <van-tabbar v-model="active" 
  class="shadow-black shadow-2xl opacity-90" active-color="#00ff00" >
    <van-tabbar-item to="/assistant">
      <template #icon>
        <van-icon class="iconfont" class-prefix="icon" name="zhinengAIzhushou" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="gift-o" to="/shopping">商城</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/shoppcart">购物车</van-tabbar-item>
    <van-tabbar-item icon="manager" to="/mine">我的</van-tabbar-item>
  </van-tabbar>
  
</template>

<script setup lang="ts">
import { ref, onMounted  } from "vue";
import { useRoute } from "vue-router";
const active = ref<number>(1);
onMounted(() => {
  const route = useRoute();
  if (route.path === "/home") {
    active.value = 1;
  } else if (route.path === "/shopping") {
    active.value = 2;
  }
    else if (route.path === "/shopping/shoppcart") {
      active.value = 3;
    }
   else if (route.path === "/mine") {
    active.value = 4;
  }
});
</script>

<style scoped>

</style>