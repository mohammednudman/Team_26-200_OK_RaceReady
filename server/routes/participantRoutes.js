const express = require("express");
const participantRoutes = express.Router();
const {
  storeUserBMI,
  addStopTimeOfHackathon,
  addParticipantsToEventParticipants,
  updateUserToken,
  getParticipantData,
} = require("../controllers/participantController.js");

// Define routes for getting all events and a single event by ID
participantRoutes.route("/:userId/bmi").put(storeUserBMI);
participantRoutes.route("/:userId/stop-time").post(addStopTimeOfHackathon);
participantRoutes
  .route("/:eventId/add-participant/:userId")
  .post(addParticipantsToEventParticipants);
participantRoutes.route("/token/:userId").post(updateUserToken);
participantRoutes.route("/:userId").get(getParticipantData);

module.exports = participantRoutes;
