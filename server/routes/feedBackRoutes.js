const express = require("express");
const feedBackRouter = express.Router();
const feedbackController = require("../controllers/feedbackController");
const rateLimiter = require("../middlewares/rateLimiter");
const feedbackValidation = require("../validation/feedback");

feedBackRouter
  .route("/")
  .post(rateLimiter, feedbackValidation, feedbackController.feedback);

module.exports = feedBackRouter;
