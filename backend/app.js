const express = require("express");
const cors = require("cors");
const weatherRouter = require("./routers/weather.route")
const app = express();
const port = process.env.PORT || 8000


app.use(cors({
  origin: "http://localhost:3000/"
  }));
  

app.use(weatherRouter);

app.listen(port, () => {
  console.log("Server is up and running on port "+port);
});
