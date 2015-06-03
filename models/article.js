/**
 * Created by brianaamodt on 5/19/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    CommentSchema = require('./comment').model('Comment').schema;

var ArticleSchema = new Schema({
    title: String,
    date: String,
    content: String,
    comments: [CommentSchema]
});

module.exports = mongoose.model('Article', ArticleSchema);