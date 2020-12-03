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
    lat: {
        type: Number,
        required: true,
        trim: true
    },
    lng: {
        type: Number,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    
});



module.exports = mongoose.model('Restaurant', RestaurantSchema);
