const mongoose = require('mongoose');

const order = mongoose.Schema({
    items: {
        type: [mongoose.ObjectId]
    },
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    delivery: {
        type: Boolean,
        required: true
    },
    contact: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    total: {
        type: Number,
        default: 0
    },
    paid: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Order', order);