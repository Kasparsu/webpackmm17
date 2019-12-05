<template>
    <div class="msg">
        <span
                class="box is-light has-text-white"
                :class="{
                    'self': message.user === 0,
                    'has-background-info': message.user === 0,
                    'has-background-danger': message.user !== 0
                  }">
            Sent by {{message.username}} {{niceTime}}
            <br>
            {{message.message}}</span>
    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        name: "Message",
        props: ['message'],
        created(){
            setInterval(()=>{
                this.currentTime = new Date();
            },1000);
        },
        data(){
            return {
                currentTime: new Date()
            }
        },
        computed: {
            niceTime(){
                this.currentTime;
                return moment(this.message.time).fromNow();
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