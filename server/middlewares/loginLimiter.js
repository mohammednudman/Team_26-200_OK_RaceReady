const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 60 * 1000, //1 min
  max: 5, //5 limit each IP to 5 login requests per 'window' per minute

  message: {
    message: "Too many login attempts from this IP, please try later after 1 hour",
  },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true, //return rate limit info in the "RateLimit-*" headers
  legacyHeaders: false, //Disable the "X-RateLimit-* headers
});

module.exports = loginLimiter;
