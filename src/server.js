const WebSocket = require('ws');

const wss = new WebSocket.Server({port:3333});

let clients = [];
let i = 0;
wss.on('connection', (client) => {
    clients.push(client);
    client.id = i++;
    client.on('message', (msg) => {
        clients.forEach(user => {
            if(user.id !== client.id) {
                user.send(JSON.stringify({user: client.id, message:msg, time: new Date()}));
            }
        });
    });
});