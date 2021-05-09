const express = require("express");
const weatherRouter = require("./routers/weather.route")
const app = express();
const port = process.env.PORT || 8000
app.use(weatherRouter);

app.get("",(req,res)=>{
  res.send("Proceed to /weather to find your weather")
})

app.listen(port, () => {
  console.log("Server is up and running on port "+port);
});
