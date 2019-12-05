<template>
    <div class="chat">
        <message-list :messages="messages"></message-list>
        <textfield @send="addMessage"></textfield>
    </div>
</template>

<script>
    export default {
        name: "Chat",
        mounted(){

            this.ws = new WebSocket('ws://localhost:3333');

            this.ws.onmessage = (event) => {
                let data = JSON.parse(event.data);
                data.time = new Date(data.time);
                this.addMessage(data);
            };
        },
        data(){
            return {
                messages: [],
                ws: null
            }
        },
        methods: {
            addMessage(message, self=false){

                if(self) {
                    this.messages.push({user: 0, message:message, time: new Date()});
                    this.ws.send(message);
                } else {
                    this.messages.push(message);
                }
            }
        }
    }
</script>

<style scoped>
    .chat{
        height: 100%;
    }
</style>