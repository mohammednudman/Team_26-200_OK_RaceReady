const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const storeUserBMI = asyncHandler(async (req, res) => {
  const { height, weight, gender } = req.body;
  const bmi = weight / (height * height);

  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.bmi = bmi;
    user.gender = gender;
    user.height = height;
    user.weight = weight;
    await user.save();

    res.status(200).json({ message: "BMI updated successfully" });
  } catch (error) {
    console.error("Error updating BMI:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const addStopTimeOfHackathon = asyncHandler(async (req, res) => {
  const { userId } = req.params; // Assuming you pass the user's ID in the URL
  const { eventId, marathonType, timestamp } = req.body;


  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Add the new timestamp to the timestamps array

    const newPerformance = {
      eventId: eventId,
      marathonType: marathonType,
      timestamp: timestamp,
    };
    user.performance.push(newPerformance);


    // Save the updated user document
    await user.save();

    return res.status(200).json({ message: "Timestamp added successfully" });
  } catch (error) {
    console.error("Error adding timestamp:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Controller to add a user to the participants array of an event
const addParticipantsToEventAttendee = asyncHandler(async (req, res) => {
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

const updateUserToken = async (req, res) => {
  const { userID } = req.params;
  const { token } = req.body;

  try {
    const user = await User.findOne({ _id: userID });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.token = token;

    await user.save();

    res.status(200).json({ message: "Token updated successfully" });
  } catch (error) {
    console.error("Error updating token:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getParticipantData = asyncHandler(async (req, res) => {
  const { userID } = req.params;
  try {
    const participant = await User.findOne({ _id: userID });
    if (!participant) {
      return res.status(404).json({ message: "User not found" });
    }

    let totalTimestamp = 0, totalDistance = 0;
    participant.performance.forEach(p => {
      totalTimestamp += p.timestamp;
      totalDistance += p.distance;
    });

    const steps = 1200 * totalDistance;
    const calorie = 3.9 * participant.weight * totalTimestamp;

  } catch (error) {
    console.error("Error updating token:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = {
  storeUserBMI,
  addStopTimeOfHackathon,
  updateUserToken,
  addParticipantsToEventParticipants: addParticipantsToEventAttendee,
};
