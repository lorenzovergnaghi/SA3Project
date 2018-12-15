// Make connection
// We can do that thanks to the script that we imported in index.html
let socket = io.connect();

//Query DOM
let message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// Function that generate a random Color
function randomColorGenerator() {
  let values = [];
  for(let i = 0; i < 3;i++){
    let num = Math.floor(Math.random() * 256);
    values.push(num);
  }
  let myRGB = 'rgb(' + values[0] + ',' + values[1] + ',' + values[2] + ')';
  return myRGB
}

// Name of the user takes a random Color
handle.style.color = randomColorGenerator();

//Emit events
//emit a message, than the WebSockets on the Server have to on this message.
//Features: When we send a message to other clients, the message is deleted from the input message.
//We send a message, the name of the User, and the color of the user name.
btn.addEventListener('click', function() {
  if (message.value && handle.value) {
    socket.emit("chat", {
      message: message.value,
      handle: handle.value,
      color_handle: handle.style.color
    });
    
  }
  if(message.value !== ""){
    socket.emit('afterSendingDelete');
  }

});

//Features: On keyup we can know when a user is typing.
// When a user delete the message from the input message, the "is typing feature" disappear.
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
  output.innerHTML += "<strong><p style='color:"+data.color_handle+";'>"+data.handle+"</p></strong><p>"+data.message+"</p>";
  // message.value = "";
  document.getElementById('window').scrollTop = document.getElementById('window').scrollHeight
});
//

socket.on('typing', function(data){
  feedback.innerHTML = '<p><em>' + data +  ' is typing a message.. </em></p>';
  document.getElementById('window').scrollTop = document.getElementById('window').scrollHeight

});

socket.on('notype', function () {
  feedback.innerHTML = "";
});

socket.on('afterSendingDelete', function () {
  message.value = "";

})



// Trigger the button click event with the Enter button on keyboard (keyCode == 13)
var input = document.getElementById("message");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("send").click();
    document.getElementById('window').scrollTop = document.getElementById('window').scrollHeight;
  }
});









