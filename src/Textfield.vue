<template>
    <div>
        <div class="section input-bar">
            <input class="input" type="text" v-model="textfield">
            <button class="button" @click="$emit('send', textfield, true)">Send</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Textfield",
        data(){
            return {
                textfield: ''
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