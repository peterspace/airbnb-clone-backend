const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'}, // user
  title: String,
  address: String,
  photos: [String],
  description: String,
  perks: [String], // features: free parking on premises, pets allowed, Long term stay allowed
  extraInfo: String,
  checkIn: Number,
  checkOut: Number,
  maxGuests: Number,
  price: Number,
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;