const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);
  let BMI = Math.round((weight / (height / 100) ** 2) * 1e2) / 1e2;

  res.send(`Your BMI is ${BMI}`);
});

app.listen(port, () => {
  console.log(`Listening to port: ${port}...`);
});
