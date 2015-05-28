/**
 * Created by brianaamodt on 5/28/15.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.get("/", function(req,res,next){
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
});

router.post('/',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/login'
    })
);

module.exports = router;
