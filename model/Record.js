const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    artist: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Record', recordSchema);