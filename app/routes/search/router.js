/** @module favorite/search */
'use strict';
const login = require('connect-ensure-login');
const http = require('http');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
require('../../models/saga');
const Saga = mongoose.model('Saga');
require('../../models/room');
const Room = mongoose.model('Room');


router.get('/room/all',function(req,res){
  Room.find({},
        function(err, fav) {
            if (err) {
              res.status(400).end();
              return;
            } else { //send JSON
              if (req.headers['accept'] === 'application\/json') {
                res.json(fav);
              }else {
                let model = {
                  x : fav
                }
                res.render('room_searched', model);
                return;
              }
            }
          });
})
router.get('/',function(req,res){
  console.log(req.query);
  let nname = undefined;
  if (req.query.name !== undefined) {
    nname = ""+req.query.name;
  }

  Saga.find({name:nname},
        function(err, fav) {
            if (err) {
              res.status(400).end();
              return;
            } else { //send JSON
              if (req.headers['accept'] === 'application\/json') {
                // console.log(fav);
                res.json(fav);
              }else {
                let model = {
                  x : fav
                }
                res.render('all_rooms', model);
                return;
              }
            }
          });
});
//search for sagas

router.get('/all',function(req,res){
  Saga.find({},
        function(err, fav) {
            if (err) {
              res.status(400).end();
              return;
            } else { //send JSON
              if (req.headers['accept'] === 'application\/json') {
                // console.log(fav);
                res.json(fav);
              }else {
                let model = {
                  x : fav
                }
                res.render('all_rooms', model);
                return;
              }
            }
          });
})

router.get('/room/',function(req,res){
  console.log(req.query);
  let nname = undefined;
  if (req.query.name !== undefined) {
    nname = ""+req.query.name;
  }

  Room.find({name:nname},
        function(err, fav) {
            if (err) {
              res.status(400).end();
              return;
            } else { //send JSON
              if (req.headers['accept'] === 'application\/json') {
                res.json(fav);
              }else {
                let model = {
                  x : fav
                }
                res.render('favorites', model);
                return;
              }
            }
          });
});


module.exports = router;
