const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CountrySchema = new Schema({
      name: String,
      season: String,
      lesson: String,
      photo: String
    });

      // models/author.js
  const CountryModel = mongoose.model('Country', CountrySchema);

  module.exports = CountryModel;