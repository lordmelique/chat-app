'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', (request, response) => {
    response.statusCode = 200;
    response.sendFile(__dirname + '/index.html')
});


io.on('connection', (socket)=>{
    console.log( "user is connected" );

    socket.on('chat message', (message) =>{
        console.log(message);
        io.emit("chat message", message);
    });

});



http.listen(1212, () => {
    console.log("Listening port:", 1212);
});