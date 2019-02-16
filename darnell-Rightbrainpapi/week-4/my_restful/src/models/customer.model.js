const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
      name: String,
      email: {
          type: String,
          required: true,
          unique: true
      }
    });

      // models/author.js
  const CustomerModel = mongoose.model('Customer', CustomerSchema);

  module.exports = CustomerModel;