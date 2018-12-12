//SOCKET
var socket = io();

socket.on('connect', function() {
  //  manda il nome della room
  let room_name = document.getElementById('unique_room_name').value;
  console.log(room_name);
  socket.emit('join',{room_name:room_name});
})
//Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var x = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');



//Emit events
//emit a message than the WebSockets on the Server
console.log(x);
x.addEventListener('click', function() {
  if (message.value && handle.value) {
    socket.emit("chat", {
      message: message.value,
      handle: handle.value
    });
  }
  ;
});

message.addEventListener('keypress', function(){
  socket.emit('typing', handle.value);
});


//Listen for addEventListener
socket.on('chat', function(data){
  feedback.innerHTML = "";
  output.innerHTML += '<p><strong>' + data.handle + ' </strong><br>'  + data.message + '</p>';
  message.value = "";
})

socket.on('typing', function(data){
  feedback.innerHTML = '<p><em>' + data +  ' is typing a message.. </em></p>';
});


// Trigger button click on enter
var input = document.getElementById("message");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("send").click();
  }
});
