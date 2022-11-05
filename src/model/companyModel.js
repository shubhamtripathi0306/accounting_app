const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    business_Name: {
      type: String,
      required: false,
    },
    aadhar_Number: {
      type: Number,
      required: true,
    },
    business_Address: {
      type: String,
      required: false,
    },
    busniess_Registration_Number: {
      type: String,
      required: false,
    },
    business_GST_Number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
