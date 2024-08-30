const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for the carts collection
const cartSchema = new Schema({
    userId: {
        type: Schema.Types.String,
    },
    productID: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    orderCount: {
        type: Number,
        required: true
    },
    orderSize: {
        type: String,
        required: true
    }
});

// Create a model using the schema
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;