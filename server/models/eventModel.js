const { mongoose } = require("../config/mongoDbConfig.js");

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
  latitude:Number,
  longitude:Number,
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
