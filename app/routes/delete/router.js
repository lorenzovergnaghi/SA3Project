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
const login = require('connect-ensure-login');



router.delete('/:id',
    login.ensureLoggedIn(),
    function(req, res){
        const id = req.params.id;
        Saga.findById(id).then((found) => {
            found.remove().then(function(removed){
                if(req.accepts('application/json')){
                    event.emit('saga.deleted',removed);
                    rest.status(204);
                    res.redirect('/');
                }}).catch(function(err){
                    res.status(400).end();
            })
        }).catch(function(err){
            res.status(404).end();
        })
    });

router.put('/:id', function(req, res) {
    var id = req.params.id;
    if (id.charAt(0) == ':') {
        id = id.substring(1);
    }
    console.log('fsdgrhetrgweehtgrwferhetregrwhtregrweht qui:'+id);

    Saga.findById(id).then(function(found){
        //object already exists (replace content)

        if (req.body.name) {
            found.name = req.body.name;
        }

        found.save().then(function(saved){
            if (req.accepts('html')) {
                res.redirect('home');
            } else {
                event.emit('saga.updated', saved);
                res.json(saved);
            }
        }).catch(function(err){
            console.log('PUT CATCH');
            console.log(id);
            console.log(req.body);

            res.status(400).end();
        });
    }).catch(function(err){
        res.status(404).end();
    });
});




module.exports = router;