const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  place: {type:mongoose.Schema.Types.ObjectId, ref:'Place'},
  user: {type:mongoose.Schema.Types.ObjectId}, // many users can boook thesame place, so no need to ref the user
  checkIn: {type:Date},
  checkOut: {type:Date},
  name: {type:String},
  phone: {type:String},
  price: Number,
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;