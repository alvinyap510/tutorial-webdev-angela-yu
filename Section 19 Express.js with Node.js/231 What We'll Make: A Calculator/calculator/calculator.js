const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let answer = parseInt(req.body.num1) + Number(req.body.num2);

  res.send(`The answer is ${answer}`);
});

app.listen(port, () => {
  console.log(`Starting server on port: ${port}`);
});
