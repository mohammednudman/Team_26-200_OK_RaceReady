const express = require("express");
const participantRoutes = express.Router();
const {
  storeUserBMI,
  addStopTimeOfHackathon,
} = require("../controllers/participantController.js");

// Define routes for getting all events and a single event by ID
participantRoutes.route("/:userId/bmi").put(storeUserBMI);
participantRoutes.route("/:userId/stop-time").post(addStopTimeOfHackathon);

module.exports = participantRoutes;
