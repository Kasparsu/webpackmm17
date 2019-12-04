const WebSocket = require('ws');

const wss = new WebSocket.Server({port:3333});
wss.on('connection', (client) => {
    client.on('message', (msg) => {
        console.log('recieved: %s', msg);
        if(msg == 'mm17'){
            client.send('Cool you are in TPT');
        }
    });
    client.send('Welcome to websocket');
});