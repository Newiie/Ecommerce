const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    dimensions: {
        type: Object,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    deliveryOptions: {
        type: Array,
        required: true
    },
    paymentOptions: {
        type: Array,
        required: true
    },
    shippingTimes: {
        type: Object,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
});

const products = mongoose.model("products", productSchema);

module.exports = products;
