const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//Internal Imports
const app = require("./app.js");
const server = require('./socket');
const { logEvents } = require("./middlewares/logger");
const client = require("./config/redisConfig");

const PORT = process.env.PORT || 8000;

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log",
  );
});


mongoose.set('debug', true);
