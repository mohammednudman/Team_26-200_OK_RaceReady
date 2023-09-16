const express = require("express");
const eventRoutes = express.Router();
const eventController = require("../controllers/eventController");

// Define routes for getting all events and a single event by ID
eventRoutes.route("/events").get(eventController.getAllEvents);
eventRoutes.route("/events/:eventId").get(eventController.getEventById);
// eventRoutes.route("/events").post(eventController.postEvent);

module.exports = eventRoutes;
