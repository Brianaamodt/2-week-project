/**
 * Created by brianaamodt on 5/17/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    GameSchema = require('./game').model('Game').schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;


var UserSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    zipcode: {type: Number },
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    games: [GameSchema]

});

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);