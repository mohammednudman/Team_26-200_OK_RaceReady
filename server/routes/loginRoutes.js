const express = require("express");
const loginRouter = express.Router();
const authController = require("../controllers/loginController");
const loginLimiter = require("../middlewares/loginLimiter");
const {
  participantLogin,
  volunteerLogin,
} = require("../controllers/loginController");

loginRouter.route("/pariticipant").post(participantLogin);
loginRouter.route("/volunteer").post(volunteerLogin);

module.exports = loginRouter;
