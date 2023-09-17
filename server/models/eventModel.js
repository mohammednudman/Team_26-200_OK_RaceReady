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
  startingPoint: {
    latitude: Number,
    longitude: Number,
  },
  endingPoint: {
    latitude: Number,
    longitude: Number,
  },
  firstAidHalts: [
    {
      type: String,
      location: {
        latitude: Number,
        longitude: Number,
      },
    },
  ],
  refreshmentHalts: [
    {
      type: String,
      location: {
        latitude: Number,
        longitude: Number,
      },
    },
  ],
  description: String,
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  volunteers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  organizer: {
    type: String,
  },
  sponsors: [
    {
      type: String,
    },
  ],

  marathonType: [
    {
      type: Number
    }
  ],

  registrationDeadline: Date,

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
