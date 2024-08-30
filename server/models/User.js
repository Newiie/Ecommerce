const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
  id: {
      type: String,
      default: Date.now().toString(),
      unique: true
  },
  name: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
  password: {
      type: String,
      required: true
  }
});

// Create a model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;