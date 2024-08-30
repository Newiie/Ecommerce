const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sellerSchema = new Schema({
  sellerId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  rating: { type: Number, default: 0 },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }] 
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;
