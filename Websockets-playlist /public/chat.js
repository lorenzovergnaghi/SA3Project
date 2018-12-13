// Make connection
var socket = io.connect();

//Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');


function randomColorGenerator() {
  let values = [];
  for(let i = 0; i < 3;i++){
    let num = Math.floor(Math.random() * 256);
    values.push(num);
  }
  let myRGB = 'rgb(' + values[0] + ',' + values[1] + ',' + values[2] + ')';
  return myRGB
}

handle.style.color = randomColorGenerator();
message.style.color = randomColorGenerator();

//Emit events
//emit a message than the WebSockets on the Server
btn.addEventListener('click', function() {
  if (message.value && handle.value) {
    socket.emit("chat", {
      message: message.value,
      handle: handle.value,
      color_handle: handle.style.color,
      color_message: message.style.color
    });
    console.log(handle.style.color);
  }
});

message.addEventListener('keyup', function(){
  if(message.value !== ""){
    socket.emit('typing', handle.value);
  }
  if(message.value === ""){
    socket.emit('notype');
  }
});

//Listen for addEventListener
socket.on('chat', function(data){
  feedback.innerHTML = "";
  output.innerHTML += "<strong><p style='color:"+data.color_handle+";'>"+data.handle+"</p></strong><p id='border' style='color:"+data.color_message+";'>"+data.message+"</p>"
  message.value = "";
  document.getElementById('window').scrollTop = document.getElementById('window').scrollHeight
});
//

socket.on('typing', function(data){
  feedback.innerHTML = '<p><em>' + data +  ' is typing a message.. </em></p>';
  document.getElementById('window').scrollTop = document.getElementById('window').scrollHeight

});

socket.on('notype', function () {
  feedback.innerHTML = "";
})



// Trigger button click on enter
var input = document.getElementById("message");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("send").click();
    document.getElementById('window').scrollTop = document.getElementById('window').scrollHeight
  }
});









