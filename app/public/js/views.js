(function(dust){dust.register("all_rooms",body_0);function body_0(chk,ctx){return chk.w("<html><head><link href=\"styles/SiteStyle.css\" rel=\"stylesheet\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"SGlogo.png\"/><title>WorkInProgress's Homepage</title><script src=\"dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"js/views.js\"></script><script src=\"js/fetch.js\"></script><script src=\"main.js\"></script></head><body><header><h1 class=\"Title\">WorkInProgress</h1><img src=\"animeImages/logoonepiece.png\"  class=\"usilogo\" align=\"left\"/><h1 class=\"current_Page\">Live Rooms</h1></header><main><!--===========================NavigationBar====================================================================--><nav class=\"navigation\"><ul><li><a href=\"home\"><b>Home </b></a></li><li><a href=\"upload\"><b> Upload   </b></a></li><li><a href=\"favorites\"><b>Favorites</b></a></li><li><a href=\"/\"><b> Live Room </b></a></li></ul></nav><!--===========================Maincontent-Upload====================================================================--><div class='maincontent'><div class=\"div_search_mobile\"><input class='search' type=\"text\" ><img class=\"search_img\" src=\"animeImages/search.png\" height=\"30\" width=\"30\"/></input></div><form method=\"POST\" action=\"/room\"><input type=\"text\" name=\"newRoomName\" placeholder=\"You're new room name\"><br/><select name=\"saga_id\">").s(ctx.get(["y"], false),ctx,{"block":body_1},{}).w("</select><br><br></form><div class=\"output\">").s(ctx.get(["x"], false),ctx,{"block":body_2},{}).w("</div></div><br/><!--===========================Sidebar====================================================================--><div class=\"sidebar\"></div></main><footer><p>&copy; WorkInProgress\t</p></footer></body></html>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<option value=\"").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\">").f(ctx.getPath(true, ["name"]),ctx,"h").w("</option>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<div style=\"color:white;background-color:purple;\">").f(ctx.getPath(true, ["name"]),ctx,"h").w("<br/>").f(ctx.getPath(true, ["_id"]),ctx,"h").w("<br/><a href=\"/room/:").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\"><b>Join</b></a></div>");}body_2.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("error",body_0);function body_0(chk,ctx){return chk.w("<html><head><link href=\"styles/SiteStyle.css\" rel=\"stylesheet\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"SGlogo.png\"/><title>Error 404</title><script src=\"dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"../js/views.js\"></script><script src=\"js/fetch.js\"></script><script src=\"main.js\"></script><script  src=\"js/upload.js\"></script></head><body><!--total body div--><!--header div--><header><h1 class=\"Title\">WorkInProgress</h1><img src=\"animeImages/logoonepiece.png\"  class=\"usilogo\" align=\"left\"/><h1 class=\"current_Page\">Error</h1></header><main><!--===========================NavigationBar====================================================================--><nav class=\"navigation\"><ul><li><a href=\"home\"><b>Home</b></a></li><li><a href=\"upload\"><b>Upload</b></a></li><li><a href=\"favorites\"><b>Favorites</b></a></li><li><a href=\"picture.html\"><b>Pictures</b></a></li></ul></nav><!--===========================Maincontent-Upload====================================================================--><div class='maincontent'><p style=\"color:red;\">Error 404</p></div><!--===========================Sidebar====================================================================--><div class=\"sidebar\"><div class=\"sidebar_icons\"><a href=\"\" target=\"_blank\"><img  src=\"animeImages/favorites.png\" alt=\"Facebook\"/> </a></div><div class=\"sidebar_icons\"><a href=\"https://www.instagram.com/sergius_gh/\" target=\"_blank\"><img  src=\"/animeImages/favorites.png\" alt=\"Instagram\"/></a></div><div class=\"sidebar_icons\"><a href=\"https://twitter.com\" target=\"_blank\"><img  src=\"animeimages/twitter.png\" alt=\"Twitter\"/></a></div></div></main><footer><p>&copy; WorkInProgress\t</p></footer></body></html>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("favorites",body_0);function body_0(chk,ctx){return chk.w("<html><head><link href=\"styles/SiteStyle.css\" rel=\"stylesheet\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"SGlogo.png\"/><title>WorkInProgress's Homepage</title><script src=\"dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"js/views.js\"></script><script src=\"js/fetch.js\"></script><script src=\"main.js\"></script></head><body><header><h1 class=\"Title\">WorkInProgress</h1><img src=\"animeImages/logoonepiece.png\"  class=\"usilogo\" align=\"left\"/><h1 class=\"current_Page\">Favorites</h1></header><main><!--===========================NavigationBar====================================================================--><nav class=\"navigation\"><ul><li><a href=\"home\"><b>Home </b></a></li><li><a href=\"upload\"><b> Upload   </b></a></li><li><a href=\"favorites\"><b>Favorites</b></a></li><li><a href=\"all_rooms\"><b> Live Room </b></a></li></ul></nav><!--===========================Maincontent-Upload====================================================================--><div class='maincontent'></div><br/><!--===========================Sidebar====================================================================--><div class=\"sidebar\"></div></main><footer><p>&copy; WorkInProgress\t</p></footer></body></html>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("addEpisode",body_0);function body_0(chk,ctx){return chk.w("<html><head><link href=\"../../styles/SiteStyle.css\" rel=\"stylesheet\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"SGlogo.png\"/><script src=\"dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"js/views.js\"></script><script src=\"js/fetch.js\"></script><script src=\"main.js\"></script><script  src=\"../js/upload.js\"></script><title>WorkInProgress's Homepage</title></head><body><header><h1 class=\"Title\">WorkInProgress</h1><img src=\"animeImages/logoonepiece.png\"  class=\"usilogo\" align=\"left\"/><h1 class=\"current_Page\"> New Episodes </h1></header><main><!--===========================NavigationBar====================================================================--><nav class=\"navigation\"><ul><li><a href=\"../home\"><b>Home </b></a></li><li><a href=\"../upload\"><b>Upload</b></a></li><li><a href=\"../favorites\"><b>Favorites</b></a></li><li><a href=\"picture.html\"><b>Live Room</b></a></li></ul></nav><!--===========================Maincontent-Upload====================================================================--><div class='maincontent'><br/><h3 style=\"color:white;\" >").f(ctx.get(["name"], false),ctx,"h").w("</h3><image src=\".").f(ctx.get(["image"], false),ctx,"h").w("\" style=\"width:200px\"/><form  class=\"upload_form\" method=\"POST\" action=\"/upload\" enctype=\"multipart/form-data\"><input type=\"hidden\" name=\"id\" value=\"").f(ctx.get(["_id"], false),ctx,"h").w("\"/><br/><input type=\"file\" name=\"file\" multiple=\"\"/><br/><input type=\"submit\"/><br/></form><br/>").f(ctx.get(["files"], false),ctx,"h").w("</div><br/><!--===========================Sidebar====================================================================--><div class=\"sidebar\"></div></main><footer><p>&copy; WorkInProgress\t</p></footer></body></html>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("login",body_0);function body_0(chk,ctx){return chk.w("<html><head><title>SA3Project || Login </title><link type= \"text/css\"rel=\"stylesheet\" href=\"styles/loginStyle.css\"/><script src=\"dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"js/views.js\"></script><script src=\"js/fetch.js\"></script><script src=\"main.js\"></script><script src=\"js/login.js\"></script></head><body style=\"background-color:grey;\"  onload=\"load()\"><div class=\"header\" id=\"header\"><a class=\"brand\" href=\"\">WorkInProgress WA3</a><ul class=\"left\"><li><input id=\"check\" class=\"btn\" type=\"button\" onclick=\"check()\" value=\"\"/></li><li><input class=\"btn\" type=\"submit\" target=\"about.php\" value=\"About\"/></li></ul></div><!--<div class=\"outer\" id=\"outer\" >--><div class=\"boxx\" id=\"login\"><form method=\"POST\" action=\"/login\"><label for=\"email\">User Name &nbsp;&nbsp;&nbsp;</label><input  type=\"text\" class=\"box\" name=\"username\" id=\"email\" value=\"\"placeholder=\"USERNAME\"/><br/><p style=\"color:red;\" id=\"error\"><br/></p><label for=\"password\">Password &nbsp;&nbsp;&nbsp;</label><input type=\"password\"  class=\"box\" name=\"password\" id=\"password\" value=\"\" placeholder=\"Password\"/><br/><br/><br/><input class=\"button\" type=\"button\" value=\"Register &nbsp;\" onclick=\"register()\"/><button class=\"button\" type=\"submit\">LOGIN</button></form></div><div class=\"boxx\" id=\"register\"><form method=\"POST\" action=\"/register\"><label for-=\"lname\">User Name &nbsp;&nbsp;&nbsp;</label><input class=\"box\" type=\"text\" name=\"lname\" id=\"lname\" value=\"\" placeholder=\"Last Name\"/><br/><br/><br/><label for=\"email\">Email ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input class=\"box\" type=\"email\" name=\"email\" id=\"email\" value=\"\" placeholder=\"Email ID\"/><br/><br/><br/><label for=\"password\">Password &nbsp;&nbsp;&nbsp;</label><input class=\"box\" type=\"text\" name=\"password\" id=\"password\" value=\"\" placeholder=\"Password\"/><br/><br/><br/><label for=\"password\">Confirm &nbsp;&nbsp;&nbsp;</label><input class=\"box\" type=\"text\" name=\"password\" id=\"password\" value=\"\" placeholder=\"Password\"/><br/><br/><br/><input class=\"button\" type=\"button\" value=\"Login\" onclick=\"login()\"/><input class=\"button\" type=\"submit\" value=\"Submit\"/></form></div><!--</div>--></body></html>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("register",body_0);function body_0(chk,ctx){return chk.w("<html><head><title>SA3Project || Login </title><link type= \"text/css\"rel=\"stylesheet\" href=\"styles/siteStyle.css\"/><script src=\"dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"js/views.js\"></script><script src=\"js/fetch.js\"></script><script src=\"main.js\"></script><script src=\"js/login.js\"></script></head><body style=\"background-color:grey;\">").s(ctx.get(["x"], false),ctx,{"block":body_1},{}).w("</body></html>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<p>Our administrators are being notifyed of you're register request. and will review it ASAP.<br/><br/><br/><br/>NAME : ").f(ctx.get(["lname"], false),ctx,"h").w("<br/>EMAIL : ").f(ctx.get(["email"], false),ctx,"h").w("<br/>PASSWORD : ").f(ctx.getPath(false, ["password","0"]),ctx,"h").w("<br/></p>");}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("home",body_0);function body_0(chk,ctx){return chk.w("<html><head><link href=\"styles/SiteStyle.css\" rel=\"stylesheet\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"SGlogo.png\"/><script src=\"dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"js/views.js\"></script><script src=\"js/fetch.js\"></script><script src=\"main.js\"></script><title>WorkInProgress's Homepage</title></head><body><!--total body div--><!--header div--><header><h1 class=\"Title\">WorkInProgress</h1><img src=\"animeImages/logoonepiece.png\"  class=\"usilogo\" align=\"left\"/><h1 class=\"current_Page\">HomePage</h1></header><main><!--===========================NavigationBar====================================================================--><nav class=\"navigation\"><ul><li><a href=\"home\"><b>Home </b></a></li><li><a href=\"upload\"><b> Upload   </b></a></li><li><a href=\"favorites\"><b>Favorites</b></a></li><li><a href=\"all_rooms\"><b> Live Room</b></a></li></ul></nav><!--===========================Maincontent-Upload====================================================================--><div class='maincontent'><div class=\"div_search_mobile\"><input class='search' type=\"text\" ><img class=\"search_img\" src=\"animeImages/search.png\" height=\"30\" width=\"30\"/></input></div><div class=\"output\">").s(ctx.get(["x"], false),ctx,{"block":body_1},{}).w("</div></div><br/><!--===========================Sidebar====================================================================--><div class=\"sidebar\"></div></main><footer><p>&copy; WorkInProgress\t</p></footer></body><script>var OUT = undefined;let events = ['keyup'];events.forEach(function(ev){document.querySelector('.search').addEventListener(ev , function(event){event.preventDefault();let filter = document.querySelector('.search').value;if (filter !== \"\") {doJSONRequest(\"GET\", \"/search?name=\"+filter, {}, undefined).then(function(obj){var model = {x : obj};dust.render('partials/episodes_home',model,function(err, out){if (err) {console.log('err!');}var latestEl = document.querySelector('.output');latestEl.innerHTML = out;})})}else {doJSONRequest(\"GET\", \"/search/all\", {}, undefined).then(function(obj){var model = {x : obj};dust.render('partials/episodes_home',model,function(err, out){if (err) {console.log('err!');}var latestEl = document.querySelector('.output');latestEl.innerHTML = out;})})}});})</script></html>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"flex-item\" ><p style=\"color:white;\">").f(ctx.getPath(true, ["name"]),ctx,"h").w("</p><img src=\"").f(ctx.getPath(true, ["image"]),ctx,"h").w("\" alt=\"CANT LOAD TEST IMAGE\" height=\"190\" width=\"250\"/><br/><form action=\"/watching/:").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\" method=\"get\"><button>WATCH ").f(ctx.getPath(true, ["name"]),ctx,"h").w("</button></form></div>");}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("index",body_0);function body_0(chk,ctx){return chk.w("<!-- DON'T MODIFY THIS FILE --><!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>SA3Project</title><link type= \"text/css\"rel=\"stylesheet\" href=\"styles/style.css\"></head><script src=\"dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"js/views.js\"></script><script src=\"js/fetch.js\"></script><script src=\"main.js\"></script><body onload=\"init()\"><header class=\"header\" id=\"abcdefg\">UGLY DEMO</header><div class='main'><div class=\"main_content\">").s(ctx.get(["x"], false),ctx,{"block":body_1},{}).w("<script>var videos = document.querySelectorAll('video');console.log(videos);videos.forEach(function(vid){document.querySelector('#bt'+vid.id).addEventListener('click', function(event){event.preventDefault();vid.webkitRequestFullScreen();vid.play();});});// document.addEventListener('keydown', function(event){//     console.log(event.keyCode);// });</script></div></div></body></html>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"card\"><p>").f(ctx.getPath(true, ["name"]),ctx,"h").w("</p><video controls=\"\" id=\"").f(ctx.getPath(true, ["id"]),ctx,"h").w("\" src=\"").f(ctx.getPath(true, ["file"]),ctx,"h").w("\" Fullscreen=false ></video><button class=\"watch_button\"id=\"bt").f(ctx.getPath(true, ["id"]),ctx,"h").w("\">Watch ").f(ctx.getPath(true, ["name"]),ctx,"h").w("!</button></div>");}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("newSaga",body_0);function body_0(chk,ctx){return chk.w("<html><head><title>SA3Project</title><link href=\"../styles/SiteStyle.css\" rel=\"stylesheet\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><script src=\"dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"js/views.js\"></script><script src=\"js/fetch.js\"></script></head><body onload=\"init()\"><header class=\"header\" id=\"abcdefg\"><h1 class=\"Title\">WorkInProgress</h1><img src=\"animeImages/logoonepiece.png\"  class=\"usilogo\" align=\"left\"/><h1 class=\"current_Page\">New Anime</h1></header><main><!--===========================NavigationBar====================================================================--><nav class=\"navigation\"><ul><li><a href=\"../home\"><b>Home </b></a></li><li><a href=\"../upload\"><b> Upload   </b></a></li><li><a href=\"../favorites\"><b>Favorites</b></a></li><li><a href=\"../picture.html\"><b>Live Room </b></a></li></ul></nav><div class=\"maincontent\"><div class=\"newCollection\"><form enctype=\"multipart/form-data\" method=\"POST\" action=\"/upload/newsaga\"><input  type=\"text\" name=\"sagaName\" placeholder=\"Anime's Title\"/><br/><br/><input type=\"file\" name=\"file\" placeholder=\"add cover\" accept=\"image/png, image/jpeg\"/><br/><br/><button class=\"button\" type=\"submit\">Create Collection </button></form></div></div><div class=\"sidebar\"></div></main><footer><p>&copy; WorkInProgress\t</p></footer></body></html>");}body_0.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("upload",body_0);function body_0(chk,ctx){return chk.w("<html><head><link href=\"styles/SiteStyle.css\" rel=\"stylesheet\"/><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"SGlogo.png\"/><title>WorkInProgress's Homepage</title><script src=\"dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"js/views.js\"></script><script src=\"js/fetch.js\"></script><script src=\"main.js\"></script><script  src=\"js/upload.js\"></script></head><body><header><h1 class=\"Title\"> WorkInProgress </h1><img src=\"animeImages/logoonepiece.png\"  class=\"usilogo\" align=\"left\"/><h1 class=\"current_Page\"> Upload   </h1></header><main><!--===========================NavigationBar====================================================================--><nav class=\"navigation\"><ul><li><a href=\"home\"><b>Home </b></a></li><li><a href=\"upload\"><b> Upload   </b></a></li><li><a href=\"favorites\"><b>Favorites</b></a></li><li><a href=\"all_rooms\"><b>Live Room </b></a></li></ul></nav><!--===========================Maincontent-Upload====================================================================--><div class='maincontent'><div class=\"div_search_mobile\"><input class='search' type=\"text\" ><img class=\"search_img\" src=\"animeImages/search.png\" height=\"30\" width=\"30\"/></input></div><div class=\"output\"><div class=\"newSaga\"><form method=\"GET\" action=\"/upload/newsaga\" ><button class=\"button_plus\" type=\"submit\" ><img class=\"plus_saga\" src=\"animeImages/button.png\"  height=\"190\" width=\"250\"  /></button></form></div>").s(ctx.get(["x"], false),ctx,{"block":body_1},{}).w("</div><br/><br/><br/></div><br/><!--===========================Sidebar====================================================================--><div class=\"sidebar\"></div></main><footer><p>&copy; WorkInProgress </p></footer></body><script>var OUT = undefined;let events = ['keyup'];events.forEach(function(ev){document.querySelector('.search').addEventListener(ev , function(event){event.preventDefault();let filter = document.querySelector('.search').value;if (filter !== \"\") {doJSONRequest(\"GET\", \"/search?name=\"+filter, {}, undefined).then(function(obj){var model = {x : obj};dust.render('partials/episodes_upload',model,function(err, out){if (err) {console.log('err!');}var latestEl = document.querySelector('.output');latestEl.innerHTML = out;})})}else {doJSONRequest(\"GET\", \"/search/all\", {}, undefined).then(function(obj){var model = {x : obj};dust.render('partials/episodes_upload',model,function(err, out){if (err) {console.log('err!');}var latestEl = document.querySelector('.output');latestEl.innerHTML = out;})})}});})</script></html>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"flex-item\"><form class=\"new\" method=\"POST\" action=\"upload/addep\"><input  type=\"hidden\" name=\"sagaid\" value=\"").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\"/>").f(ctx.getPath(true, ["name"]),ctx,"h").w("<br/><img src=\"").f(ctx.getPath(true, ["image"]),ctx,"h").w("\" alt=\"CANT LOAD TEST IMAGE\" height=\"190\" width=\"250\"/><br/><button class=\"button\" type=\"submit\">EDIT ").f(ctx.getPath(true, ["name"]),ctx,"h").w("</button></form></div>");}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("watching",body_0);function body_0(chk,ctx){return chk.w("<html><head><link href=\"../styles/SiteStyle.css\" rel=\"stylesheet\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/><link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"SGlogo.png\"/><script src=\"../dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"../js/views.js\"></script><script src=\"../js/fetch.js\"></script><script src=\"../main.js\"></script><script src=\"../js/watching.js\"></script><title>WorkInProgress's Homepage</title></head><body><!--total body div--><!--header div--><header><h1 class=\"Title\">WorkInProgress</h1><img src=\"../animeImages/logoonepiece.png\"  class=\"usilogo\" align=\"left\"/><h1 class=\"current_Page\">Watching</h1></header><main><!--===========================NavigationBar====================================================================--><nav class=\"navigation\"><ul><li><a href=\"../home\"><b>Home </b></a></li><li><a href=\"../upload\"><b> Upload   </b></a></li><li><a href=\"../favorites\"><b>Favorites</b></a></li><li><a href=\"../all_rooms\"><b>Live Room </b></a></li></ul></nav><div class=\"maincontent_watching\">").s(ctx.get(["x"], false),ctx,{"block":body_1},{}).s(ctx.get(["z"], false),ctx,{"block":body_2},{}).s(ctx.get(["y"], false),ctx,{"block":body_3},{}).w("</div><div class=\"sidebar\"></div></main><footer><p>&copy; WorkInProgress\t</p></footer></body></html>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<h3 class=\"\">").f(ctx.getPath(true, ["name"]),ctx,"h").w("</h3>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<p class=\"title_asdf\">").f(ctx.getPath(true, ["name"]),ctx,"h").w("<p><br/><video style=\"max-width:600px; max-height:400px;\" controls class=\"bigone\" src=\"../").f(ctx.getPath(true, ["file"]),ctx,"h").w("\"></video><br/>");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.w("<button  class=\"next_episodes\" onclick=\"setWatching('../").f(ctx.getPath(true, ["file"]),ctx,"h").w("','").f(ctx.getPath(true, ["name"]),ctx,"h").w("')\">Watch ").f(ctx.getPath(true, ["name"]),ctx,"h").w("</button><br/>");}body_3.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("partials\/episodes_home",body_0);function body_0(chk,ctx){return chk.s(ctx.get(["x"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"flex-item\" ><p style=\"color:white;\">").f(ctx.getPath(true, ["name"]),ctx,"h").w("</p><img src=\"").f(ctx.getPath(true, ["image"]),ctx,"h").w("\" alt=\"CANT LOAD TEST IMAGE\" height=\"190\" width=\"250\"/><br/><form action=\"/watching/:").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\" method=\"get\"><button>WATCH ").f(ctx.getPath(true, ["name"]),ctx,"h").w("</button></form></div>");}body_1.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("room_tamplate",body_0);function body_0(chk,ctx){return chk.w("<!-- DON'T MODIFY THIS FILE --><!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>A ROOM</title><link type= \"text/css\"rel=\"stylesheet\" href=\"../styles/style.css\"></head><script src=\"../dustjs-linkedin/dust-core.min.js\" charset=\"utf-8\"></script><script src=\"../js/views.js\"></script><script src=\"../js/fetch.js\"></script><script src=\"../main.js\"></script><body><header class=\"header\" id=\"abcdefg\">UGLY DEMO</header><div class='main'><div class=\"main_content\">").s(ctx.get(["x"], false),ctx,{"block":body_1},{}).s(ctx.get(["y"], false),ctx,{"block":body_2},{}).w("</div></div></body></html>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div>").f(ctx.getPath(true, ["name"]),ctx,"h").w("<br/><br/><br/><image style='max-height:250px;' src='../").f(ctx.getPath(true, ["image"]),ctx,"h").w("''></image></div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<video style=\"max-width:600px; max-height:400px;\" controls class=\"bigone\" src=\"../").f(ctx.getPath(true, ["file"]),ctx,"h").w("\"></video><br/><p class=\"title_asdf\">").f(ctx.getPath(true, ["name"]),ctx,"h").w("<p><br/><button  class=\"next_episodes\" onclick=\"setWatching('../").f(ctx.getPath(true, ["file"]),ctx,"h").w("','").f(ctx.getPath(true, ["name"]),ctx,"h").w("')\">Watch ").f(ctx.getPath(true, ["name"]),ctx,"h").w("</button><br/>");}body_2.__dustBody=!0;return body_0}(dust));
(function(dust){dust.register("partials\/episodes_upload",body_0);function body_0(chk,ctx){return chk.s(ctx.get(["x"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<div class=\"flex-item\"><form class=\"new\" method=\"POST\" action=\"upload/addep\"><input  type=\"hidden\" name=\"sagaid\" value=\"").f(ctx.getPath(true, ["_id"]),ctx,"h").w("\"/>").f(ctx.getPath(true, ["name"]),ctx,"h").w("<br/><img src=\"").f(ctx.getPath(true, ["image"]),ctx,"h").w("\" alt=\"CANT LOAD TEST IMAGE\" height=\"190\" width=\"250\"/><br/><button class=\"button\" type=\"submit\">EDIT ").f(ctx.getPath(true, ["name"]),ctx,"h").w("</button></form></div>");}body_1.__dustBody=!0;return body_0}(dust));
