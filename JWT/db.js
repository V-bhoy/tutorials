const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb://localhost:27017/JWT")

const userSchema = mongoose.Schema({
    username: String,
    password : String
});

const User = mongoose.model("user",userSchema);


module.exports = {User, connection};