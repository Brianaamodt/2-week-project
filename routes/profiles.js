/**
 * Created by brianaamodt on 6/4/15.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/user');

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../views/profiles.html'));
});

router.post('/', function(req,res,next) {
    console.log(req.body);
    Users.create(req.body, function (err, post) {
        if (err)
            next(err);
        else
            res.redirect('/users/:id');
    })
});

module.exports = router;
