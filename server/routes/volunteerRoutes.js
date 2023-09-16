const express = require("express");
const {
  addVolunteerToEventParticipants,
} = require("../controllers/volunteerController");
const volunteerRoutes = express.Router();

volunteerRoutes
  .route("/:eventId/add-participant/:userId")
  .post(addVolunteerToEventParticipants);

module.exports = volunteerRoutes;
