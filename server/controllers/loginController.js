const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const asyncHandler = require("express-async-handler");

const participantLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const role = "participant";

  if (!username || !password)
    return res.status(400).json({ message: "All fields are required" });

  const foundUser = await User.findOne({ username, role }).exec();

  if (!foundUser) return res.status(401).json({ message: "Unauthorized" });

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) return res.status(401).json({ message: "Unauthorized" });

  // Send the user ID in the response
  res.status(200).json({ message: "Login Successful", userId: foundUser._id });
});

const volunteerLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const role = "volunteer";

  if (!username || !password)
    return res.status(400).json({ message: "All fields are required" });

  const foundUser = await User.findOne({ username, role }).exec();

  if (!foundUser) return res.status(401).json({ message: "Unauthorized" });

  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) return res.status(401).json({ message: "Unauthorized" });

  // Send the user ID in the response
  res.status(200).json({ message: "Login Successful", userId: foundUser._id });
});

module.exports = { participantLogin, volunteerLogin };
