const Event = require("../models/eventModel");

// Get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a single event by ID
const getEventById = async (req, res) => {
  const { eventId } = req.params; // Extract the event ID from the URL params

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getEventByEventName = async (req, res) => {
  const { eventName } = req.params; // Assuming you're passing eventName as a URL parameter

  try {
    // Use Mongoose's findOne method to find an event by eventName
    const event = await Event.findOne({ eventName });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // If found, return the event as JSON
    res.status(200).json(event);
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  getEventByEventName,
};
