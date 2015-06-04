var express = require('express');
var router = express.Router();
var path = require('path');
var Users = require('../models/user');
var Game = require('../models/game');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
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

router.post('/games', function(req, res, next){
    console.log("1", req);
    var game = new Game({
        gameName: req.body.gameName,
        gameDescription: req.body.gameDescription
    });
    Users.findById(req.body.id,
        function(err, user){
            if (err){
                console.log("Find article failed", err);
                next(err)
            }
            try {
                user.comments.push(game);
                user.save(function (err) {
                    if (err) return next(err);
                });
                res.send(game);
            }catch(exception){
                console.log("Push failed:", exception);
                next(err);
            }
        });
});

module.exports = router;
