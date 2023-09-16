const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const storeUserBMI = asyncHandler(async (req, res) => {
  const { height, weight } = req.body;
  const bmi = weight / (height * height);
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    user.bmi = bmi;
    await user.save();

    res.status(200).json({ message: "BMI updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

const addStopTimeOfHackathon = asyncHandler(async (req, res) => {
  const { userId } = req.params; // Assuming you pass the user's ID in the URL
  const timestamp = new Date(); // Create a new timestamp

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Add the new timestamp to the timestamps array
    user.timestamps.push(timestamp);

    // Save the updated user document
    await user.save();

    return res.status(200).json({ message: "Timestamp added successfully" });
  } catch (error) {
    console.error("Error adding timestamp:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = { storeUserBMI, addStopTimeOfHackathon };
