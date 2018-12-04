/** @module root/router */
'use strict';
const fs = require("fs");
const mongoose = require('mongoose');
const formidable = require('formidable');
// mongoose.connect('mongodb://localhost/test');

const express = require('express');
const router = express.Router();

require('../../models/episode');
const Episode = mongoose.model('Episode');

router.get('/', function(req, res){
  console.log('/upload:get');
  res.render('upload');
})


// router.post('/upload', function(req, res){
//     var form = new formidable.IncomingForm(),
//     files = [],
//     fields = [];
//     form.on('field', function(field, value) {
//         fields.push([field, value]);
//     })
//     form.on('file', function(field, file) {
//         console.log(file.name);
//         files.push([field, file]);
//     })
//     form.on('end', function() {
//         console.log('done');
//         res.redirect('/forms');
//     });
//     form.parse(req);
// });

router.post('/', function(req, res){
  var folder ='./public/storage';
  var xname;
  var xpath;



  var form = new formidable.IncomingForm();
    form.on('field', function(name, value) {
      if (name === 'path') {
        folder += value + '/';
        // console.log(folder);
        //check if folder exist, create if necessary
      }
    });
    form.on('progress', function(bytesReceived, bytesExpected) {
      // console.log(bytesReceived);
    });
		form.on('fileBegin', function(name, file) {
			file.pathname = folder+file.name;
			file.path = folder+file.name;
      xname = file.name;
      xpath = './'+file.path.substring(9);
      console.log(xname,xpath);
		});
    form.on('error', function(err) {
      console.log('error detected');
    });

    form.uploadDir=folder;
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    form.parse(req, (err, fields, files)=>{
      let incomingEp = new Episode({name:xname , bookmarked:true, file : xpath});
      if (err) {
        console.log("FORM error, not uploaded");
        res.writeHead(304,{'Location':'http://localhost:3000/upload'});
        res.end();
      }else {
        incomingEp.save(function (err, saved) {
        if (err) {
          console.log('DB error, not saved');
          res.writeHead(304,{'Location':'http://localhost:3000/upload'});
          res.end();
        }else {
          console.log('ALL GOOD');
          res.writeHead(304,{'Location':'http://localhost:3000/upload'});
          res.end();
        }
      });
      }
  });
});


/** router for /upload */
module.exports = router;
