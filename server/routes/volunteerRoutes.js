const express = require("express");
const {
  addParticipantsToEventParticipants,
} = require("../controllers/participantController");
const volunteerRoutes = express.Router();

volunteerRoutes
  .route("/:eventId/add-participant/:userId")
  .post(addVolunteerToEventParticipants);

module.exports = volunteerRoutes;
