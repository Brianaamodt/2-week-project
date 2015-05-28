var express = require('express');
var router = express.Router();
var path = require('path');
var Users = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.sendFile(path.resolve(__dirname, '../views/users.html'));  //append username & logout option
    } else {
        res.json("You must be a member to view user profiles"); //shake user/password box
    }
});

router.get('/findUsers', function(req, res, next){
        if (req.isAuthenticated()) {
            Users.find(
                {},
                "firstName lastName zipcode email",
                function (err, Users) {
                    res.json(Users);
                    console.log(1);
                });

        } else {
            res.json("Access Denied");
    }
});

router.get('/userLogin', function(req, res, next){
        if (req.isAuthenticated()) {
            console.log("This Happens");
            Users.find({email: req.user.email}, "firstName lastName zipcode email", function (err, users) {
                res.json(users);
            });

        } else {
            res.json("You must be a member to view user profiles");
        }
    });

router.get('/logOut', function(req, res, next) {
    req.logout();
    res.redirect('../../');
});

module.exports = router;
