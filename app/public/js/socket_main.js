//SOCKET
var socket = io();

socket.on('connect', function() {
  //  manda il nome della room
  let room_name = document.querySelector('.unique_room_name').value;
  console.log(room_name);
  socket.emit('join',{room_name:room_name});
});


socket.on('play_pause',function(data){
  action_recived = true;
  if (data.pause) {
    console.log('pausing');
    document.querySelector('.bigone').pause();
  }else {
    console.log('playing');
    document.querySelector('.bigone').play();
  }
});
socket.on('seeked',function(data){
  console.log('setting time');
  if (!(Math.abs(data.time - document.querySelector('.bigone').currentTime) < 5)) {
    document.querySelector('.bigone').currentTime = data.time;
  }
});
socket.on('switch_episode_once',function(data){
  let video_el = document.querySelector('.bigone');
  // console.log(data);
  // console.log(video_el);
  setWatchingTHISRoom(data.ep_file);
});


function setWatchingRoom(a){
  document.querySelector('.bigone').src = a;
  socket.emit('switch_episode', {ep_file:a});
}
function setWatchingTHISRoom(a){
  document.querySelector('.bigone').src = a;
}

//video play pause emitters
// TODO: 
// let can_play_pause = true;IS Works
// let action_recived = true; Should be, dont know
let can_play_pause = true;
document.querySelector('.bigone').addEventListener('play',function(event){
  if (action_recived) {
      action_recived = false;
  }else {
    socket.emit('play_pause',{pause:false});
  }
});
document.querySelector('.bigone').addEventListener('pause',function(event){
  if (action_recived) {
      action_recived = false;
  }else {
    socket.emit('play_pause',{pause:true});
  }
});
function updateSeeked(){
  // console.log(document.querySelector('.bigone').currentTime);
  socket.emit('seek',{time:document.querySelector('.bigone').currentTime});
}
document.querySelector('.bigone').addEventListener('seeked',updateSeeked());





//==============================
// Make connection
// We can do that thanks to the script that we imported in index.html

//Query DOM
let message = document.getElementById('message');
let    handle = document.getElementById('handle');
let    btn = document.getElementById('send');
let    output_chat = document.getElementById('output_chat');
let    feedback = document.getElementById('feedback');

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
var msg_recived = false;
btn.addEventListener('click', function() {
  if (message.value && handle.value) {
    msg_recived = true;
    socket.emit("chat", {
      message: message.value,
      handle: handle.value,
      color_handle: handle.style.color
    });
    output_chat.innerHTML += '<p class="rightAlign" style="color:' +handle.style.color+'"><strong>'+handle.value+'</strong></p>'+'<p class="rightAlign">'+ message.value+ '</p>';
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
  if (msg_recived) {
    console.log('it was me');
    msg_recived = false;
  }else {
    console.log('it was NOT me');
      feedback.innerHTML = "";
      output_chat.innerHTML += "<strong><p style='color:"+data.color_handle+";'>"+data.handle+"</p></strong><p>"+data.message+"</p>";
      // message.value = "";
      document.getElementById('window').scrollTop = document.getElementById('window').scrollHeight;
  }
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
