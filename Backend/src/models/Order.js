const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({

    rest_id: {
        type: String,
        required: true,
        trim: true
    },
    menu_id: {
        type: String,
        required: true,
        trim: true
    },
    customer_id: {
        type: String,
        required: true,
        trim: true
    },

    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    date: {
        type: Date(),
        default: new Date(),
    }


});



module.exports = mongoose.model('Order', OrderSchema);