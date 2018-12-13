//SOCKET
let socket = io();

socket.on('connect', function() {
  //  manda il nome della room
  let room_name = document.querySelector('.unique_room_name').value;
  console.log(room_name);
  socket.emit('join',{room_name:room_name});
});
//Query DOM
var message = document.querySelector('.message');
var handle = document.querySelector('.handle');
var x = document.querySelector('.send');
var output = document.querySelector('.output');
var feedback = document.querySelector('.feedback');



//Emit events
//emit a message than the WebSockets on the Server

x.addEventListener('click', function() {
  if (message.value && handle.value) {
    socket.emit("chat", {
      message: message.value,
      handle: handle.value
    });
  }
});

message.addEventListener('keypress', function(){
  socket.emit('typing', handle.value);
});


//Listen for addEventListener
socket.on('chat', function(data){
  feedback.innerHTML = "";
  output.innerHTML += '<p><strong>' + data.handle + ' </strong><br>'  + data.message + '</p>';
  message.value = "";
});

socket.on('typing', function(data){
  feedback.innerHTML = '<p><em>' + data +  ' is typing a message.. </em></p>';
});
socket.on('play_pause',function(data){
  if (data.pause) {
    document.querySelector('.bigone').pause();
  }else {
    document.querySelector('.bigone').play();
  }
})


// Trigger button click on enter
var input = document.querySelector(".message");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.querySelector('.send').click();
  }
});


//video play pause emitters

document.querySelector('.bigone').addEventListener('play',function(event){
    socket.emit('play_pause',{pause:false});
});
document.querySelector('.bigone').addEventListener('pause',function(event){
    socket.emit('play_pause',{pause:true});
});




