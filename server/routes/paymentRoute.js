const express = require("express");
const paymentRouter = express();

const paymentController = require("../controllers/paymentController");

paymentRouter.route("/").post(paymentController);

module.exports = paymentRouter;
