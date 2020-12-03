const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MenuSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    rest_id: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
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



module.exports = mongoose.model('Menu', MenuSchema);
