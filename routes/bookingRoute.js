const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const {
  createBooking,
getUserBookings,
getOneUserBooking,
} = require("../controllers/bookingController");

router.post("/", protect, createBooking);
router.get("/", protect, getUserBookings); // modified
router.get("/:id", protect, getOneUserBooking); // modified


module.exports = router;
