const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  role: String, 
  shiftSchedule: String, 
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
