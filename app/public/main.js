let socket = io();

function load () {
  document.getElementById('register').style="display:none;";
  document.getElementById('check').value="Register";
}
function register () {
  document.getElementById('register').style="display:block;";
  document.getElementById('login').style="display:none";
  document.getElementById('check').value="Login";
  //document.getElementById('header').style="display:none";
}
function login () {
  document.getElementById('register').style="display:none;";
  document.getElementById('login').style="display:block;";
  document.getElementById('check').value="Register";
  //document.getElementById('header').style="display:none";
}
function check () {

  var che= document.getElementById('check').value;
  if(che=="Login")
  {
    document.getElementById('register').style="display:none;";
    document.getElementById('login').style="display:block;";
    document.getElementById('check').value="Register";
  }
  else
  {
    document.getElementById('register').style="display:block;";
    document.getElementById('login').style="display:none";
    document.getElementById('check').value="Login";
  }

}

function validation()
{
  var check=document.getElementById('email').type;
  if(check=="email")
  {
    var value=document.getElementById('email').value;
    if(value=="")
    {
      document.getElementById('error').innerHTML="Incorrect Email Address";
    }
  }
}

//edit sagas delete / change name /

socket.on('favorite.deleted', function(event) {
  const dom = document.getElementById(event._id);
  if (dom) {
    dom.outerHTML = "";
  }
});



function edit() {
  let editable= true;
  if(editable) {
    const editHTML = ` <input  class="editName"  placeholder="New Title" type="text"/> 
                       <input  class="editNameButton" type="submit" value="edit"/><br/>
                     <input type="submit" class="deleteSeries" value="delete"/> `;

    console.log('Called');
    const targets = document.querySelectorAll('.editable');
    targets.forEach((element) => {
      element.innerHTML = editHTML;

    });
    addEditListener();
  }
}

function addEditListener() {
  const titles = document.querySelectorAll(".saga_title");
  console.log(titles);
  const output = document.querySelector(".output");

  const ids= document.querySelectorAll(".hiddenIds");
  const nameButtons = document.querySelectorAll(".editNameButton");
  const names = document.querySelectorAll(".editName");
  const deletes = document.querySelectorAll(".deleteSeries");

  for (let i = 0; i < names.length; i++) {
    let len = ids[i].value.length;
    if (ids[i].value.charAt(len-1) == '/') {
      var id = ids[i].value.substring(0,len-1);
    }
    //
    nameButtons[i].addEventListener("click", function () {

      doFetchRequest("POST", "/editSaga/:"+ id, {'Content-Type':'application/json'},JSON.stringify({name:names[i].value})).then(
          (res)=>{
            titles[i].innerHTML=names[i].value;
            names[i].value= "";
          }
      )
    });

    console.log(deletes);
    deletes[i].addEventListener("click", function () {

      doJSONRequest("DELETE", "/editSaga/:"+ id, {}, null).then(
          (res)=>{
            let target = ids[i].parentElement;
            console.log(target);
            const parent = target.parentElement;
            parent.removeChild(target);
            // console.log(res)
            //get by id ggez poi
            //get by id OUTPUT
            //outputElement.removeChild(flexItemElement);
          }
      ).catch(err=>{
        console.log(err)
      })


    });
  }
}



