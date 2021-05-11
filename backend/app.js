const express = require("express");
const cors = require("cors");
const weatherRouter = require("./routers/weather.route")
const app = express();
const port = process.env.PORT || 8000

app.use(cors({
  origin: "http://192.168.1.12:3000"
  }));
  
// app.get("/",(req,res)=>{
//   res.send("Proceed to /weather to find your weather")
// })

app.use(weatherRouter);

app.listen(port, () => {
  console.log("Server is up and running on port "+port);
});
