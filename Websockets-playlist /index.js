var express = require('express');
var socket = require('socket.io');


//App setup
var app = express();
var server = app.listen(4000, function(){
  console.log("Listening on port 4000!")
});

//static files
app.use(express.static('public')) //show content of public folder on route root /

//Socket setup
var io = socket(server);
io.on('connection', function(socket){
  console.log("socket connection done", socket.id);

  socket.on("disconnect", function () {
    console.log("socket DISCONNECT", socket.id);
  });



// Handle chat event
  socket.on('chat', function(data){
    io.sockets.emit("chat", data)
  });
  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data)
  })
});
