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

const addNewEvent = async (req, res) => {
  try {
    const eventData = req.body;
    const newEvent = new Event(eventData);
    await newEvent.save();
    res.status(201).json({ message: "Event added successfully" });
  } catch (error) {
    console.error("Error adding event:", error);
    res.status(500).json({ error: "Internal server error" });
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

module.exports = {
  getTotalEventCount,
  getTotalRegistrations,
  getTotalRevenue,
  addNewEvent,
  eventInfo,
  getVolunteers,
  sendNotificationsAll,
  sendNotificationsVolunteers,
};
