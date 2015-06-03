module.exports = router;
var express =require('express');
var router = express.Router();
var path = require('path');
var Article = require('../models/article');
var Comment = require('../models/comment');

router.get("/", function(req,res,next){
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

/* GET users listing. */
router.get('/articles', function(req, res, next) {
    Article.find({}, null, function(err, data){
        res.send(data);
    });
});

router.post('/add', function(req, res, next){
    Article.create(req.body, function(err, data){
        if (err) {
            console.log(err);
            next(err);
        }
        res.json(data);
    });
});

router.post('/comments', function(req, res, next){
    var comment = new Comment({
        comment: req.body.comment
    });
    Article.findById(req.body.id,
        function(err, article){
            if (err){
                console.log("Find article failed", err);
                next(err)
            }
            try {
                article.comments.push(comment);
                article.save(function (err) {
                    if (err) return next(err);
                });
                res.send(comment);
            }catch(exception){
                console.log("Push failed:", exception);
                next(err);
            }
        });
});

router.delete('/:id', function(req, res, next) {
    Article.findByIdAndRemove(req.params.id, req.body, function (err, article) {
        if (err) return next(err);
        res.json(article);
    });
});

module.exports = router;
