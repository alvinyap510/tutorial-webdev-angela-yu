const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
  console.log(request);
});

app.get("/contact", (req, res) => {
  res.send("Contact me at: mock@mock.com");
});

app.get("/about", (req, res) => {
  res.send("I am Alvin Yap!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
