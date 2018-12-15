//SOCKET
var socket = io();

socket.on('connect', function() {
  //  manda il nome della room
  let room_name = document.querySelector('.unique_room_name').value;
  console.log(room_name);
  socket.emit('join',{room_name:room_name});
})
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
var action_recived = false;
socket.on('chat', function(data){
  feedback.innerHTML = "";
  output.innerHTML += '<p><strong>' + data.handle + ' </strong><br>'  + data.message + '</p>';
  message.value = "";
});

socket.on('typing', function(data){
  feedback.innerHTML = '<p><em>' + data +  ' is typing a message.. </em></p>';
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


// Trigger button click on enter
var input = document.querySelector(".message");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.querySelector('.send').click();
  }
});

function setWatchingRoom(a){
  document.querySelector('.bigone').src = a;
  console.log("S_M, switch_episode");
  socket.emit('switch_episode', {ep_file:a});
}
function setWatchingTHISRoom(a){
  document.querySelector('.bigone').src = a;
}

//video play pause emitters
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
