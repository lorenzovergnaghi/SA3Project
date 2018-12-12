// Make connection
var socket = io.connect();

//Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');





//Emit events
//emit a message than the WebSockets on the Server
btn.addEventListener('click', function() {
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
  document.getElementById('window').scrollTop = document.getElementById('window').scrollHeight
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
    document.getElementById('window').scrollTop = document.getElementById('window').scrollHeight
  }
});

