const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
  sponsorName: {
    type: String,
    required: true,
  },
  contactPerson: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: String
});

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

module.exports = Sponsor;
