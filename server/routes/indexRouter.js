const express = require("express");
const indexRouter = express.Router();

indexRouter.use("/feedback", require("./feedBackRoutes"));
indexRouter.use("/register", require("./registerRoutes"));
indexRouter.use("/login", require("./loginRoutes"));
indexRouter.use("/events", require("./eventRoutes"));
indexRouter.use("/admin", require("./adminRoutes"));
indexRouter.use("/participant", require("./participantRoutes"));
indexRouter.use("/volunteer", require("./volunteerRoutes"));
indexRouter.use("/payment", require("./paymentRoute"));

module.exports = indexRouter;
