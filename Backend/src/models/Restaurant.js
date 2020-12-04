const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    street: {
        type: String,
        required: true,
        trim: true
    },
    lat: {
        type: Number,
        trim: true
    },
    lng: {
        type: Number,
        trim: true
    },
    phone: {
        type: Number,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    
});



module.exports = mongoose.model('Restaurant', RestaurantSchema);
