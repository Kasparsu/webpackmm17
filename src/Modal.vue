<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <slot/>
        </div>
        <button class="modal-close is-large" @click="$emit('close')"></button>
    </div>
</template>

<script>
    export default {
        name: "Modal",
    }
</script>

<style scoped>

</style>