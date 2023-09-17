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
  // eventEndDate: {
  //   type: Date,
  //   required: true,
  // },
  city: String,
  place: String,
  startingPoint: {
    latitude: String,
    longitude: String,
  },
  endingPoint: {
    latitude: String,
    longitude: String,
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
      type: Number,
    },
  ],
<<<<<<< HEAD
  fees: Number,

=======
  fees: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
>>>>>>> da3b10dc03cd1a80811d8e72828bb5a64690448d
  registrationDeadline: Date,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
