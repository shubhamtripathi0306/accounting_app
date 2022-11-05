const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_Name: {
      type: String,
      required: true,
    },
    last_Name: {
      type: String,
      required: true,
    },
    mobile_Number: {
      type: Number,
      required: true,
    },
    aadhar_Number: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    address_Information:{
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
