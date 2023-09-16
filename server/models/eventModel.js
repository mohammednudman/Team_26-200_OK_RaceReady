const {mongoose} = require('../config/mongoDbConfig.js')

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventStartDate: {
    type: Date,
    required: true,
  },
  eventEndDate: {
    type: Date,
    required: true,
  },
  location: String,
  description: String,
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  sponsors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sponsor',
  }],
  registrationDeadline: Date,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
