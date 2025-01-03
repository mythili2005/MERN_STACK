var mongodb = require('mongoose');

var userSchema = mongodb.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

var user_schema = mongodb.model("users", userSchema);

module.exports = user_schema