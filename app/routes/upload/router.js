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


router.get('/addep',
login.ensureLoggedIn(),
function(req,res){
  res.render('home');
});

router.get("/addep"),
    login.ensureLoggedIn(),
    function(req,res){
  res.render ("addEpisode")
};



router.post('/addep',
login.ensureLoggedIn(),
function(req,res){
  console.log(req.body);
  Saga.findById(req.body.sagaid,function(err, found){
      if (err) {
        res.status(404).end();
        return
      }else {
        if(found){
          console.log(found);
          res.render('addEpisode',found);
        }
      }
    });

})

router.get('/newsaga',
login.ensureLoggedIn(),
function(req,res){
  res.render('newSaga');
});
router.post('/newsaga',
login.ensureLoggedIn(),
function(req, res){
  var folderPath = './public/storage/saga_covers';
  var form = new formidable.IncomingForm();
  form.on('fileBegin', function(name, file) {
		file.path = folderPath+'/'+file.name;
  });
  form.on('end',function(err){
    if (err) {
      console.log('err end');
    }else {
      console.log('saved all');
    }
  });
  form.on('error',function(err){
    if (err) {
      console.log('err errror');
    }
  });
  form.maxFileSize = 1024*1024*10000;
  form.uploadDir=folderPath+'/';
  form.encoding = 'utf-8';
  form.keepExtensions = true;
  form.multiples = false;
  form.parse(req, (err, fields, files)=>{
    console.log(files.file);
    let incomingSaga = new Saga({name:fields.sagaName,last_watched:1,image:files.file.path.replace('./public', '.')});
      // console.log(incomingSaga);
      incomingSaga.save(function(err,saved){
        if (err) {
          console.log('Error creating new Saga');
          res.redirect('/upload/newSaga');
        }else {
          console.log('saved new saga');
          res.redirect('/upload');
        }
      });

  });
});
// router.post('/newsaga',function(req,res){
//   console.log(req.body);
//   let incomingSaga = new Saga({name:req.body.sagaName});
//   console.log(incomingSaga);
//   incomingSaga.save(function(err,saved){
//     if (err) {
//       console.log('Error creating new Saga');
//       res.redirect('/upload/newSaga');
//     }else {
//       console.log('saved new saga');
//       console.log(saved);
//       res.redirect('/upload');
//     }
//   });
// });


router.get('/',
   login.ensureLoggedIn(),
  function(req, res){
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
  });


router.post('/',
login.ensureLoggedIn(),
function(req, res){
  console.log('GETTIN IT');
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

    // console.log(util.inspect({fields: fields, files: files}));
    // console.log(fields);
    files.file.forEach((el)=>{
      // console.log(el);
      Saga.findById(fields.id,function(err, found) {
          if (err) {
            res.status(404).end();
          } else {
            let incomingEp = new Episode({name:el.name , bookmarked:false, file : el.path.replace('./public', '.')});
            // console.log(found);
            // console.log(incomingEp);
            found.episodes.push(incomingEp);
            console.log(found);
            found.save(function (err, saved) {
              if (err) {
                console.log("err .save");
                res.status(500).end();
              }else {
                console.log('saved | '+el.name);
              }
            });
          }
      });
      // console.log('KAKAKAkA');
      // let incomingEp = new Episode({name:el.name , bookmarked:false, file : el.path.replace('./public', '.')});
      // console.log(incomingEp);
      // incomingEp.save(function (err, saved) {
      //   if (err) {
      //     console.log("err .save");
      //     res.status(500).end();
      //   }else {
      //     console.log('saved | '+el.name);
      //   }
      // });
    });

  });
});



/** router for /upload */
module.exports = router;
