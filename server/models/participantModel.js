const {mongoose} = require('../config/mongoDbConfig.js')

const participantSchema = new mongoose.Schema({
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
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  status: String,
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
