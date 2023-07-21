const express = require("express");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");
const {
  createPlace,
  getUserPlaces,
  getOnePlace,
  updatePlaces,
  getAllPlaces,
  deletePlace,
} = require("../controllers/placeController");

router.get("/", getAllPlaces);
router.get("/user-places", protect, getUserPlaces);// modified
router.get("/:id", getOnePlace); // modified

//========={Admin only}============================
router.post("/", protect, createPlace);
router.put("/", protect, updatePlaces);
router.delete("/:id", protect, deletePlace);// new

module.exports = router;
