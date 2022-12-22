const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    default: null
  },
  alternatePhoneNumber: {
    type: String,
    default: null
  },
  location: {
    type: String,
    default: null
  },
},{timestamps: true});

module.exports = mongoose.model("user", UserSchema);