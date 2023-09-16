//Module Imports
const express = require("express");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

//Internal Imports
const {logger} = require("./middlewares/logger");
const corsOptions = require("./config/corsOptions");
const errorHandler = require("./middlewares/errorHandler");
const {connectDB} = require("./config/mongoDbConfig.js");
const client = require("./config/redisConfig");

const app = express();

//Database Initializers
connectDB();

//Middlewares
app.use(logger);
app.use(helmet());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use("/api", require("./routes/indexRouter"));

app.use('/auth', require('./routes/loginRoutes'));

app.use(errorHandler);
module.exports = app;
