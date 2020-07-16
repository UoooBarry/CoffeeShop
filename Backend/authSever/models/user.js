let mongoose = require('mongoose');


//scheme
let loginScheme = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


//scheme
let userScheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
    },
    contact: {
        type: Number,
        required: true
    },
    login: loginScheme
});


module.exports = mongoose.model('User', userScheme);