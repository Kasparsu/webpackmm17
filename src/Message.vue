<template>
    <div class="msg">
        <span
                class="box is-light has-text-white"
                :class="{
                    'self': message.user === 0,
                    'has-background-info': message.user === 0,
                    'has-background-danger': message.user !== 0
                  }">
            {{niceTime}}
            <br>
            {{message.message}}</span>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: ['message'],
        computed: {
            niceTime(){
                return this.message.time.getHours() + ':' + this.message.time.getMinutes();
            }
        }
    }
</script>

<style scoped>
    .msg {
        width: 100%;
        margin-bottom: 10px;
    }
    .box {
        width: 40%;
    }
    .self {
        margin-left: 60%;
    }
</style>