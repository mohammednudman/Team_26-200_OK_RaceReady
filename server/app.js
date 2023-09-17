//Module Imports
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const responseTime = require("response-time");
const bodyParser = require("body-parser");

//Internal Imports
const { logger } = require("./middlewares/logger");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middlewares/errorHandler");
const { connectDB } = require("./config/mongoDbConfig.js");
const client = require("./config/redisConfig");
const promCLient = require("prom-client");

const app = express();

//Database Initializers
connectDB();

const collectDefaultMetrics = promCLient.collectDefaultMetrics;
collectDefaultMetrics({ register: promCLient.register });

//Middlewares
app.use(logger);
app.use(helmet());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const reqResTime = new promCLient.Histogram({
  name: "http_express_req_res_time",
  help: "Help Message",
  label: "This tells how much time the server will take to response",
  labelNames: ["method", "route", "status_code"],
  buckets: [1, 50, 100, 200, 400, 500, 800, 1000, 2000],
});
app.use(
  responseTime((req, res, time) => {
    reqResTime
      .labels({
        method: req.method,
        route: req.route,
        status_code: res.statusCode,
      })
      .observe(time);
  }),
);
app.use("/api", require("./routes/indexRouter"));

app.use("/auth", require("./routes/loginRoutes"));

//Pushing to prometheus server
app.get("/metrics", async (req, res) => {
  res.setHeader("Content-Type", promCLient.register.contentType);
  const metrics = await promCLient.register.metrics();
  res.send(metrics);
});

app.use(errorHandler);
module.exports = app;
