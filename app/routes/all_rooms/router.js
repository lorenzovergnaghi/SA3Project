/** @module root/router */
'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const express = require('express');
const router = express.Router();

const util = require('util');
const default_headers = {'Content-Type': 'text.html; cahrset = utf-8'};
const http = require('http');
const url	= require('url');
require('../../models/saga');
const Saga = mongoose.model('Saga');
require('../../models/room');
const Room = mongoose.model('Room');
const login = require('connect-ensure-login');





router.get('/',
login.ensureLoggedIn(),
function(req,res){

//Room creation
// let kk = new Room({name:'testRoom',testSagaName:'AFROSAMU'});
// console.log(kk);
// kk.save(function(err,saved){
//   if (err) {
//     console.warn('Error creating new Room');
//   }else {
//     console.warn('saved new saga');
//   }
// });


  Room.find({},function(err, rooms){
      if (err) {
        res.status(404).end();
        return
      }else {
        if(rooms){
          Saga.find({},function(err, sagas){
              if (err) {
                res.status(404).end();
                return
              }else {
                if(sagas){
                  res.render('all_rooms',{x:rooms,y:sagas});
                }
              }
            });
        }
      }
    });
});



/** router for /root */
module.exports = router;
