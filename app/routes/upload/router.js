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

router.get('/', function(req, res){
  console.log('/upload:get');
  res.render('upload');
})


router.post('/',function(req, res){
  // console.log('POSTING');

  var folderPath = './public/storage/';

  var nname;
  var npath;

  var form = new formidable.IncomingForm();

  form.on('field',function(name,value){
    // console.log('field name: ' + name);
    // console.log('field value: ' + value);
  });
  form.on('progress', function(bytesReceived, bytesExpected) {
    // console.log(bytesReceived, bytesExpected);
  });
  form.on('fileBegin', function(name, file) {
    // console.log('file.path = ' +file.path);
		file.path = folderPath+file.name;
    // console.log('file.path2 = ' +file.path);
    nname = file.name;
    npath = file.path;
    // console.log('nname = '+nname);
    // console.log('npath = '+npath);
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
