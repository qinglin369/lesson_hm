<template>
   <div>
      {{ modelValue }}
      <button @click="handleClick">按钮3</button>
   </div>
</template>

<script setup>
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const handleClick = () => {
  emit("update:modelValue","新value")
}
</script>

<style lang="scss" scoped>

</style>