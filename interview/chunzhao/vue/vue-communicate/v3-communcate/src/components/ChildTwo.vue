<template>
    <div>
        ChildTwo:{{ msg2 }}
        {{ todolist }}
    </div>
</template>

<script setup>
defineProps ({
    // msg2: String
    msg2: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>

</style>