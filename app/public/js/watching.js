function setWatching(f){
  document.querySelector('.bigone').src = f;
}


function logTime(){
  var vid = document.getElementById("bigone");

  console.log(vid.currentTime);

  vid.currentTime = 50;

}
