var express = require('express');
var socket = require('socket.io');


//We setup our App
var app = express();
var server = app.listen(4000, function(){
  console.log("Listening on port 4000!")
});

//Show the content of public folder on route root /
app.use(express.static('public'));

//We setup the Socket
var io = socket(server);
io.on('connection', function(socket){
  console.log("socket connection done", socket.id);

  socket.on("disconnect", function () {
    console.log("socket DISCONNECT", socket.id);
  });



// Here on the server we handle the our events
  socket.on('chat', function(data){
    console.log(data);
    io.sockets.emit("chat", data)
  });
  //Broadcast to all except one client.
  //Because when I'm typing only the others must see that I'm typing a message.
  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data)
  });
  //Broadcast to all except one client.
  socket.on('notype', function () {
    socket.broadcast.emit('notype')

  });
  // We send only to one client, because when a client Send his message, only
  // his input message is deleted and not also the other clients.
  socket.on('afterSendingDelete', function () {
    socket.emit('afterSendingDelete');
  });

});
