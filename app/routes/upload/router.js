/** @module root/router */
'use strict';
const fs = require("fs");
const mongoose = require('mongoose');
const formidable = require('formidable');
mongoose.connect('mongodb://localhost/test');
const util =require('util')
const express = require('express');
const router = express.Router();

require('../../models/episode');
const Episode = mongoose.model('Episode');
require('../../models/saga');
const Saga = mongoose.model('Saga');
const login = require('connect-ensure-login');


router.get('/',
  login.ensureLoggedIn(),
  function(req, res){

    //push one new saga
    // let fakeSaga = new Saga({name:'afroSamu'});
    // fakeSaga.save(function (err, saved) {
    //   if (err) {
    //     console.log("err .save");
    //   }else {
    // console.log('saved!');
    // console.log(1);
      Saga.find({},function(err,foundAll){//FIX non funge piu il DB
          if (err) {
            res.render('upload');
          }else {
            let mod = {
              x : foundAll
            }
            console.log(mod);
            res.render('upload',mod);
          }});
    //   }
    // });
  });


router.post('/',function(req, res){
  var folderPath = './public/storage/';
  var nname;
  var npath;
  var form = new formidable.IncomingForm();
  form.on('field',function(name,value){
  });
  form.on('progress', function(bytesReceived, bytesExpected) {
  });
  form.on('fileBegin', function(name, file) {
		file.path = folderPath+file.name;
    nname = file.name;
    npath = file.path;
  });
  form.on('end',function(err){
    if (err) {
      console.log('err end');
    }else {
      console.log('saved all');
      res.status(304,{'Location':'http://localhost:3000'});
      res.end();
    }
  });
  form.on('error',function(err){
    if (err) {
      console.log('err errror');
    }
  });
  form.maxFileSize = 1024*1024*10000;
  form.uploadDir=folderPath;
  form.encoding = 'utf-8';
  form.keepExtensions = true;
  form.multiples = true;
  form.parse(req, (err, fields, files)=>{

    console.log(util.inspect({fields: fields, files: files}));
    files.file.forEach((el)=>{
      console.log('KAKAKAkA');
      let incomingEp = new Episode({name:el.name , bookmarked:false, file : el.path.replace('./public', '.')});
      console.log(incomingEp);
      incomingEp.save(function (err, saved) {
        if (err) {
          console.log("err .save");
          res.status(500).end();
        }else {
          console.log('saved | '+el.name);
        }
      });
    });

  });
});



/** router for /upload */
module.exports = router;
