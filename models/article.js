/**
 * Created by brianaamodt on 5/19/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    CommentSchema = require('./comment').model('Comment').schema;

var ArticleSchema = new Schema({
    title: {type:String, required: true},
    image: {type:String, required: false},
    date: {type:String, required: true},
    content: {type:String, required: true},
    comments: [CommentSchema]
});

module.exports = mongoose.model('Article', ArticleSchema);