<template>
    <div class="chat">
        <div v-if="username===''">
            <username @join="join"></username>
        </div>
        <div v-else class="chat columns">
            <div class="column is-10">
                <message-list :messages="messages"></message-list>
                <textfield @send="addMessage"></textfield>
            </div>
            <div class="column is-2">
                <userlist :users="users"></userlist>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Chat",
        mounted(){

            this.ws = new WebSocket('ws://localhost:3333');

            this.ws.onmessage = (event) => {
                let msg = JSON.parse(event.data);
                console.log(msg);
                if(msg.type === 'message') {
                    msg.data.time = new Date(msg.data.time);
                    this.addMessage(msg.data);
                }
            };
        },
        data(){
            return {
                messages: [],
                ws: null,
                username: '',
                users: ['kaspar', 'martin', 'peeter']
            }
        },
        methods: {
            addMessage(message, self=false){

                if(self) {
                    this.messages.push(
                        {
                            user: 0,
                            message:message,
                            time: new Date(),
                            username: this.username
                        });
                    this.ws.send(JSON.stringify({type:'message', data: message}));
                } else {
                    this.messages.push(message);
                }
            },
            join(username){
                this.ws.send(JSON.stringify({type: 'join', data: username}));
                this.username = username;
            }
        }
    }
</script>

<style scoped>
    .chat{
        height: 100%;
    }
</style>