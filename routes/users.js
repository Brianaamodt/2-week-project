var express = require('express');
var router = express.Router();
var path = require('path');
var Users = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.sendFile(path.resolve(__dirname, '../views/users.html'));  //append username & logout option
    } else {
        res.json("You must log in to view your user profile"); //shake user/password box
    }
});

router.get('/findUsers', function(req, res, next){
    if (req.isAuthenticated()) {
        Users.find(
            {},
            "firstName lastName zipcode email",
            function (err, Users) {
                res.json(Users);
            });

    } else {
        res.json("Access Denied");
    }
});

module.exports = router;
