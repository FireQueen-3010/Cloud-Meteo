const express = require("express");
const router = express.Router();
const mainforecast = require("../utils/mainforecast");

router.get("", (req, res) => {
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
