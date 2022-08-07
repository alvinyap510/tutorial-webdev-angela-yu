const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

const date = new Date();
const weekendArray = [0, 6];

app.get("/", (req, res) => {
  if (weekendArray.indexOf(date.getDay()) !== -1) {
    res.send("It's WEEKEND !");
  } else {
    res.send("You have to WORK !");
  }
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
