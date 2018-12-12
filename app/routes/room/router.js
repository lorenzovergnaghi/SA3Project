/** @module root/room */
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






router.get('/:_id',
login.ensureLoggedIn(),
 function(req,res){
  let xid = req.params._id;
  let room_name = xid;
  if (xid.charAt(0) == ':') {
    xid = xid.substring(1);
  }
  Room.findById(xid,function(err, found){
      if (err) {
        console.log('NOT FOUND : ROOM');
        res.status(404).end();
        return
      }else {
        if(found){
          let xid = found.saga_id;
          if (xid.charAt(0) == ':') {
            xid = xid.substring(1);
          }
          let len = xid.length;
          if (xid.charAt(len-1) == '!') {
            xid = xid.substring(0,24);
          }
          Saga.findById(xid,function(err, found){
              if (err) {
                console.log('NOT FOUND : SAGA');
                res.status(404).end();
                return
              }else {
                if(found){
                  let x = found;
                  let y = found.episodes;
                  let z = found.episodes[found.last_watched];
                  res.render('room_tamplate',{saga:x,episode_list:y,last_watched:z,k:room_name,username: req.user.username});
                }
              }
            });
        }
      }
    });
});


router.post('/',function(req,res){
  let xid = req.body.saga_id;
  if (xid.charAt(0) == ':') {
    xid = xid.substring(1);
  }
  let len = xid.length;
  if (xid.charAt(len-1) == '!') {
    xid = xid.substring(0,24);
  }
  Saga.findById(xid,function(err, found){
      if (err) {
        console.log('NOT FOUND : SAGA');
        res.status(404).end();
        return
      }else {
        if(found){
          let kk = new Room({name:req.body.newRoomName,saga_id:found._id});
          // console.log(kk);
          kk.save(function(err,saved){
            if (err) {
              console.warn('Error creating new Room');
              console.log(err);
              res.redirect('all_rooms');
            }else {
              console.warn('saved new saga');
              res.redirect('all_rooms');
            }
          });
        }
      }
    });

})


/** router for /root */
module.exports = router;
