const express = require("express");
const weatherRouter = require("./routers/weather.route")
const app = express();

app.use(weatherRouter);


app.listen(8000, () => {
  console.log("Server is up and running on port 8000");
});
