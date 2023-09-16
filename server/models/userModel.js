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
  performance: [
    {
      eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
      marathonType: {
        type: Number
      },
      timestamp: {
        type: Number
      }
    }
  ],
  token: {
    type: String
  },
  role: {
    type: String,
    required: true,
  },
  weight: {
    type: Number
  },
  height: {
    type: Number
  },
  bmi: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User;
