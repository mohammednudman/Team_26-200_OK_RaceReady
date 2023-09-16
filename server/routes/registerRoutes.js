const express = require("express");
const registerRouter = express.Router();

const registerController = require("../controllers/registerController");

registerRouter
  .route("/participant")
  .post(registerController.participantRegister);
registerRouter.route("/volunteer").post(registerController.volunteerRegister);

module.exports = registerRouter;