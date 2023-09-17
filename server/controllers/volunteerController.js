const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Controller to add a user to the participants array of an event
const addVolunteerToEventParticipants = asyncHandler(async (req, res) => {
  const { eventId, userId } = req.params; // Assuming you pass the event ID and user ID in the URL

  try {
    // Find the event by ID
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Check if the user ID is already in the participants array
    if (event.participants.includes(userId)) {
      return res
        .status(400)
        .json({ message: "User is already a participant in this event" });
    }

    // Add the user ID to the participants array
    event.participants.push(userId);

    // Save the updated event document
    await event.save();

    return res
      .status(200)
      .json({ message: "User added to the event participants" });
  } catch (error) {
    console.error("Error adding user to event participants:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Controller to find all events where a user has volunteered
const findEventsVolunteeredByUser = async (req, res) => {
  const { userId } = req.params; // Assuming you pass the user's ID in the URL

  try {
    // Find events where the user's ID is in the volunteers array
    const events = await Event.find({ volunteers: userId });
    res.status(200).json(events);
  } catch (error) {
    console.error("Error finding events volunteered by user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addVolunteerToEventParticipants,
  findEventsVolunteeredByUser,
};
