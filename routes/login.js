/**
 * Created by brianaamodt on 5/28/15.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/user');

router.get("/", function(req,res,next){
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
});

router.get('/userLogIn', function(req, res, next){
    if (req.isAuthenticated()) {
        Users.findOne({email: req.user.email}, "firstName lastName zipcode email", function (err, user) {
            res.send(user);
        });

    } else {
        res.send("false");
    }
});

router.get('/logOut', function(req, res, next) {
    req.logout();
    res.redirect('../../');
});

router.post('/',
    passport.authenticate('local', {
        successRedirect: '/users/:id',
        failureRedirect: '/login'
    })
);

module.exports = router;
