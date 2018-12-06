function LOL(){
  console.log('LOL LOL LOL');
}


function postVideo(event){
  event.preventDefault();
  let form = document.querySelector('#upload-form-file');
  console.log(form.value);
  doJSONRequest("POST", "/upload", {'Content-Type':'application/json'}, {name : 'a',file : 'b'}).then(function(obj){
    console.log(obj);

  })
}


function insertVideo(event){
  event.preventDefault();
  console.log('pippa1');
  doJSONRequest("GET", "/watching", {}, undefined).then(function(obj){
    let main = document.querySelector('.main_content');
    let newNode = document.createElement('video');
    newNode.controls = true;
    newNode.id = '#ciao';
    newNode.src = obj.src;
    main.appendChild(newNode);
  });
}

function init(){
  console.log('INIT');

}
