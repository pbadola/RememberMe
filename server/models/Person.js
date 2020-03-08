const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    eventName: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    profileUrl: String,
    notes: String
});

module.exports = mongoose.model('Persons', PersonSchema);