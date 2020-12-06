const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RestaurantRatingSchema = new Schema({

    rest_id: {
        type: String,
        required: true,
        trim: true
    },
    customer_id: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now,
    }


});



module.exports = mongoose.model('RestaurantRating', RestaurantRatingSchema);