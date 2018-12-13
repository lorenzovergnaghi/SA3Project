/** @module root/home */
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
const login = require('connect-ensure-login');



// router.get('/',
//   login.ensureLoggedIn(),
//   function(req, res){
//     res.render('home');
//   });
router.get('/',
    login.ensureLoggedIn(),
function(req,res){
  Saga.find({},function(err, found){
      if (err) {
        res.status(404).end();
        return
      }else {
        if(found){
          res.render('home',{x:found,
          username: req.user.username});
        }
      }
    });
});




/** router for /root */
module.exports = router;
