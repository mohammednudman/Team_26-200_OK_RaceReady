const express = require("express");
const indexRouter = express.Router();

indexRouter.use("/feedback", require("./feedBackRoutes"));
indexRouter.use("/register", require("./registerRoutes"));
indexRouter.use("/login", require("./loginRoutes"));
indexRouter.use("/events", require("./eventRoutes"));

module.exports = indexRouter;
