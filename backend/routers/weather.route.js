const express = require("express");
const router = express.Router();
const mainforecast = require("../utils/mainforecast");

router.get("/", (req, res) => {
res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
  if (!req.query.address)
    return res.send({
      error: "Please provide an address!",
    });
  mainforecast(req.query.address, (error, { location, forecast, airq } = {}) => {
    if (error) return res.send({ error });
    res.send({
      location,
      address: req.query.address,
      forecast,
      air_quality: airq,
    });
  });
});

module.exports = router;
