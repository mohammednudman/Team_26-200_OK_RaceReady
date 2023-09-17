// eventController.js
const Event = require("../models/eventModel");
const User = require("../models/userModel");

const getTotalEventCount = async (req, res) => {
  try {
    const totalEvents = await Event.countDocuments();
    res.json({ totalEvents });
  } catch (error) {
    console.error("Error counting events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addSponsorsToEvent = async (req, res) => {
  try {
    // Get the event ID from the request parameters
    const { eventId } = req.params;

    // Find the event by ID
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Extract sponsors data from the request body
    const { sponsors } = req.body;

    // Add the sponsors to the event's sponsors array
    event.sponsors.push(...sponsors);

    // Save the updated event document
    await event.save();

    return res
      .status(200)
      .json({ message: "Sponsors added to the event successfully" });
  } catch (error) {
    console.error("Error adding sponsors to event:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getTotalRegistrations = async (req, res) => {
  try {
    const role = "participant";
    const totalRegistrations = await User.countDocuments({ role });
    res.json({ totalRegistrations });
  } catch (error) {
    console.error("Error counting registrations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getTotalRevenue = async (req, res) => {
  //payments to be integrated
};

// const addNewEvent = async (req, res) => {
//   try {
//     const eventData = req.body;
//     const newEvent = new Event(eventData);
//     await newEvent.save();
//     res.status(201).json({ message: "Event added successfully" });
//   } catch (error) {
//     console.error("Error adding event:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };


const addNewEvent = async (req, res) => {
  try {
    // Extract event data from the request body
    const {
      eventName,
      eventDate,
      city,
      place,
      startingPoint,
      endingPoint,
      sponsors,
      fees,
    } = req.body;

    // Create a new Event document
    const newEvent = new Event({
      eventName,
      eventDate: new Date(eventDate), // Convert eventDate to a Date object
      city,
      place,
      startingPoint,
      endingPoint,
      sponsors,
      fees,
    });

    console.log(newEvent);

    // Save the new event to the database
    await newEvent.save();

    res.status(201).json({ message: 'Event added successfully', event: newEvent });
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




const eventInfo = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getVolunteers = async (req, res) => {
  try {
    const role = "volunteer";
    const volunteer = await User.countDocuments({ role });
    res.json(volunteer);
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const sendNotificationsAll = async (req, res) => {
  try {
    // take notification title and body from req.body
    const { title, body } = req.body;
    const usersWithToken = await User.find({
      token: { $exists: true, $ne: null },
    });

    const message = {
      data: {
        title: title,
        body: body,
        token: token,
      },
    };

    const sendPromises = usersWithToken.map(async (user) => {
      try {
        admin
          .messaging()
          .send(message)
          .then((response) => {
            console.log("Successfully sent message:", response);
          });
      } catch (error) {
        console.error(
          `Error sending notification to user with token ${user.token}:`,
          error,
        );
      }
    });

    await Promise.all(sendPromises); //band
  } catch (error) {
    console.error("Error sending notifications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const sendNotificationsVolunteers = async (req, res) => {
  try {
    // take notification title and body from req.body
    const { title, body } = req.body;
    const usersWithToken = await User.find({
      token: { $exists: true, $ne: null },
      role: "volunteer",
    });

    const message = {
      data: {
        title: title,
        body: body,
        token: token,
      },
    };

    const sendPromises = usersWithToken.map(async (user) => {
      try {
        admin
          .messaging()
          .send(message)
          .then((response) => {
            console.log("Successfully sent message:", response);
          });
      } catch (error) {
        console.error(
          `Error sending notification to user with token ${user.token}:`,
          error,
        );
      }
    });

    await Promise.all(sendPromises); //band
  } catch (error) {
    console.error("Error sending notifications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getParticipantsPerEvent = async (req, res) => {
  try {
    // Find all events and populate the 'participants' field with user data
    const events = await Event.find().populate("participants");

    // Calculate the total number of participants for each event
    const participantsPerEvent = events.map((event) => ({
      eventName: event.eventName,
      totalParticipants: event.participants.length,
    }));

    res.status(200).json(participantsPerEvent);
  } catch (error) {
    console.error("Error fetching participants per event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getTotalEventCount,
  getTotalRegistrations,
  getTotalRevenue,
  addNewEvent,
  eventInfo,
  getVolunteers,
  sendNotificationsAll,
  sendNotificationsVolunteers,
  getParticipantsPerEvent,
  addSponsorsToEvent,
};
