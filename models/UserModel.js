const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    email: {type:String, unique:true},
    password: String,
    photo: {
      type: String,
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    role: String, // "Admin", "User"
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
