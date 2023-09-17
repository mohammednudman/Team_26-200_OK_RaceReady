const express = require("express");
const {
  addVolunteerToEventParticipants,
  findEventsVolunteeredByUser,
} = require("../controllers/volunteerController");
const volunteerRoutes = express.Router();

volunteerRoutes
  .route("/:eventId/add-participant/:userId")
  .post(addVolunteerToEventParticipants);
volunteerRoutes.route("volunteered/:userId").get(findEventsVolunteeredByUser);

module.exports = volunteerRoutes;
