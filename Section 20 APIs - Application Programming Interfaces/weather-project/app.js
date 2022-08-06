const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
  //   console.log(req.body.cityName);
  const query = req.body.cityName;

  const apiKey = "a4008fccdbf3b303759fca2c28e2b0b0";

  const units = "metric";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);

      const temperature = weatherData.main.temp;

      const description = weatherData.weather[0].description;

      const icon = weatherData.weather[0].icon;

      const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      res.write(`<p>The weather is ${description}</p>`);
      res.write(`<p>The temperature is ${temperature}</p>`);
      res.write(`<img src="${imageUrl}" />`);

      res.send();
    });
  });
});

// const query = "London";

// const apiKey = "a4008fccdbf3b303759fca2c28e2b0b0";

// const units = "metric";

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

// https.get(url, (response) => {
// console.log(response.statusCode);

// response.on("data", (data) => {
//   const weatherData = JSON.parse(data);

//   const temperature = weatherData.main.temp;

//   const description = weatherData.weather[0].description;

//   const icon = weatherData.weather[0].icon;

//   const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
//   console.log(imageUrl);

//   console.log(temperature);

//   console.log(description);

//   res.write(`<p>The weather is ${description}</p>`);
//   res.write(`<p>The temperature is ${temperature}</p>`);
//   res.write(`<img src="${imageUrl}" />`);

//   res.send();
// });
// });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
