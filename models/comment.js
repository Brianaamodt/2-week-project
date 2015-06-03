/**
 * Created by brianaamodt on 6/1/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    comment: String
});

module.exports = mongoose.model('Comment', CommentSchema);