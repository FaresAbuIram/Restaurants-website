const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({

    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },


});



module.exports = mongoose.model('Customer', CustomerSchema);