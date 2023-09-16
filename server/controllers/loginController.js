const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const asyncHandler = require("express-async-handler");

const participantLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const role = "participant";

  if (!username || !password)
    return res.status(400).json({ message: "All fields are required" });

  const foundUser = await User.findOne({ username, role }).exec();
  console.log("Found User:", foundUser);

  if (!foundUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const match = await bcrypt.compare(password, foundUser.password);
  console.log("password of User:", match);
  if (!match) return res.status(401).json({ message: "Unauthorized" });

  res.status(200).send({ message: "Login Successful" });
});

const volunteerLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const role = "volunteer";

  if (!username || !password)
    return res.status(400).json({ message: "All fields are required" });

  const foundUser = await User.findOne({ username, role }).exec();
  console.log("Found User:", foundUser);

  if (!foundUser) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const match = await bcrypt.compare(password, foundUser.password);
  console.log("password of User:", match);
  if (!match) return res.status(401).json({ message: "Unauthorized" });

  res.status(200).send({ message: "Login Successful" });
});

module.exports = { participantLogin, volunteerLogin };
