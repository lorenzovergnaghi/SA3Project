/** @module favorite/watching */
'use strict';
const login = require('connect-ensure-login');
const http = require('http');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
require('../../models/saga');
const Saga = mongoose.model('Saga');

router.get('/:_id',
login.ensureLoggedIn(),
 function(req,res){
  let xid = req.params._id;
  if (xid.charAt(0) == ':') {
    xid = xid.substring(1);
  }
  Saga.findById(xid,function(err, found){
      if (err) {
        res.status(404).end();
        return
      }else {
        if(found){
          console.log(found);
          let x = found;
          let y = found.episodes;
          let z = found.episodes[found.last_watched];
          console.log(found.last_watched);
          res.render('watching',{x:x,y:y,z:z});
        }
      }
    });
});
router.get('/storage/',function(req,res){
  req.status(200).end();
});



module.exports = router;
