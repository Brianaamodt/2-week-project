/**
 * Created by brianaamodt on 6/4/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
    gameName: String,
    gameDescription: String
});

module.exports = mongoose.model('Game', GameSchema);