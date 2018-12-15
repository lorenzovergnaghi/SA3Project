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
const login = require('connect-ensure-login');

router.get('/',
    // login.ensureLoggedIn(),
    function(req, res){
      res.redirect('login');
    });

router.post('/',
    function(req,res){
      console.log(req.body);
      if (req.body.password[0] === req.body.password[1]) {
        var cpas = "";
        for (var i = 1; i <= req.body.password[0].length; i++) {
          cpas += "*";
        }
        User.find({ username: req.body.lname }, function (err, user) {
          if (err) {
            console.log('error finding user in register');
          }else {
            if (user.length === 0) {
              let newUser = new User({username : req.body.lname,password :req.body.password[0] ,email :req.body.email});
              newUser.save(function(err,saved){
                if (err) {
                  console.log(err);
                  res.redirect('login');
                }else {
                  res.redirect('login');
                }
              });
            }else {
              let msg = ["Username already in use"];
              res.render('register', {x:{lname:req.body.lname, email:req.body.email,password:cpas},y:"Register operation failed : "+msg});
            }
          }
        });
      }else {
        let msg = ["passwords don't match"];
        res.render('register', {x:{lname:req.body.lname, email:req.body.email, password:req.body.password},y:"Register operation failed : "+msg});
      }
    });

module.exports = router;
