const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  bmi: Number,
  gender: String,
  timestamps: [{ type: Date }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
