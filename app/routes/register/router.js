/** @module root/router */
'use strict';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const express = require('express');
const router = express.Router();

require('../../models/user');
const User = mongoose.model('User');

const util = require('util');
const default_headers = {'Content-Type': 'text.html; cahrset = utf-8'};
const http = require('http');
const url	= require('url');


router.get('/', function(req, res){
  // let fakeU = new User({username:'s',password:"s"});
  // fakeU.save(function(err,done){
  //   if(err){
  //     console.log('err saving fakeu');
  //     res.redirect('/');
  //   }else{
  //     console.log('savedfakeu');
  //     res.redirect('/');
  //   }
  // })
  res.redirect('/login');
});

router.post('/',function(req,res){
  console.log(req.body);
  res.render('upload');
});

/** router for /root */
module.exports = router;
