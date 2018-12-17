'use strict';
const fs = require("fs");
const mongoose = require('mongoose');
const formidable = require('formidable');
mongoose.connect('mongodb://localhost/test');
const util = require('util');
const express = require('express');
const router = express.Router();
require('../../models/episode');
const Episode = mongoose.model('Episode');
require('../../models/saga');
const Saga = mongoose.model('Saga');
require('../../models/room');
const Room = mongoose.model('Room');
const login = require('connect-ensure-login');



router.delete('/:id',
    login.ensureLoggedIn(),
    function(req, res){
        var id = req.params.id;
        if (id.charAt(0) == ':') {
            id = id.substring(1);
        }
        Saga.findById(id).then((found) => {
            found.remove().then(function(removed){
                if(req.accepts('application/json')){
                    // event.emit('saga.deleted',removed);
                    console.log("ALl ok");
                    res.json(JSON.stringify({removed: removed})).end();
                }}).catch(function(err){
                    console.log(err);
                    res.status(400).end();
            })
        }).catch(function(err){
            res.status(404).end();
        })
    });

router.post('/:id',
  login.ensureLoggedIn(),
 function(req, res) {
    var id = req.params.id;
    if (id.charAt(0) == ':') {
        id = id.substring(1);
    }

    Saga.findById(id).then(function(found){
        //object already exists (replace content)

        if (req.body.name) {
            found.name = req.body.name;
        }

        console.log(req.body);

        found.save().then(function(){
                res.status(202).end();
        }).catch(function(err){
            res.status(400).end();
        });
    }).catch(function(err){
        res.status(404).end();
    });
});




router.post('/room/delete/:id',
    login.ensureLoggedIn(),
    function(req, res){
      console.log('==================| deleting room');
        var id = req.params.id;
        if (id.charAt(0) == ':') {
            id = id.substring(1);
        }
        Room.findById(id).then((found) => {
            found.remove().then(function(removed){
                    res.redirect('../../../all_rooms');
              }).catch(function(err){
                    console.log(err);
                    res.status(400).end();
            })
        }).catch(function(err){
            res.status(404).end();
        })
    });

router.post('/room/:id',
  login.ensureLoggedIn(),
  function(req, res) {
    console.log('==================| updating room name');
      var id = req.params.id;
      if (id.charAt(0) == ':') {
          id = id.substring(1);
        }

    Room.findById(id).then(function(found){
        if (req.body.name) {
            found.name = req.body.name;
        }
        console.log(req.body);
        found.save().then(function(){
          res.redirect('../../all_rooms');
        }).catch(function(err){
            res.status(400).end();
        });
    }).catch(function(err){
        res.status(404).end();
    });
});

module.exports = router;
