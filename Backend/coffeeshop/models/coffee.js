const mongoose = require('mongoose');

const coffee = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    price:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Coffee', coffee);