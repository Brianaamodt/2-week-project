/**
 * Created by brianaamodt on 5/28/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../views/resource.html'));
});

module.exports = router;