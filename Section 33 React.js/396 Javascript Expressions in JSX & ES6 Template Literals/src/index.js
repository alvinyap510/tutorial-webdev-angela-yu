// const React = require("react");
// const ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

const myName = "Alvin";
const houseNumber = myName === "Alvin" ? 18 : undefined;

ReactDOM.render(
  <div>
    <h1>Hello {myName}</h1>
    <p>Your lucky number is {Math.ceil(Math.random() * 10)}</p>
    <p>Your house number is {houseNumber}</p>
  </div>,
  document.getElementById("root")
);
