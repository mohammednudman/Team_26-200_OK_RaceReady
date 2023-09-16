const express = require("express");
const participantRoutes = express.Router();
const {
  storeUserBMI,
  addStopTimeOfHackathon,
  updateUserToken
} = require("../controllers/participantController.js");

// Define routes for getting all events and a single event by ID
participantRoutes.route("/:userId/bmi").put(storeUserBMI);
participantRoutes.route("/:userId/stop-time").post(addStopTimeOfHackathon);
participantRoutes.route("/:userId").post(updateUserToken);

module.exports = participantRoutes;
