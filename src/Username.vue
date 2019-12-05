<template>
    <div class="section input-bar">
        <input class="input" type="text" v-model="username">
        <button class="button" @click="$emit('join', username)">Join</button>
    </div>
</template>

<script>
    export default {
        name: "Username",
        data(){
            return {
                username: ''
            }
        }
    }
</script>

<style scoped>
    .input-bar {
        display: flex;
        padding-bottom: 0;
    }
</style>