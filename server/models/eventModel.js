const { mongoose } = require("../config/mongoDbConfig.js");

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  location: String,
  description: String,
  organizer: {
    type: String,
  },
  sponsors: [
    {
      type: String,
    },
  ],
  registrationDeadline: Date,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
