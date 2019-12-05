<template>
    <div class="section">
        <message v-for="message in messages" :message="message"></message>
    </div>
</template>

<script>
    export default {
        name: "MessageList",
        props: ['messages']
    }
</script>

<style scoped>
    .section {
        height: 80%;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>