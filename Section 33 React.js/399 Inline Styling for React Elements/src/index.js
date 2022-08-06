import React from "react";
import ReactDOM from "react-dom";

let customStyle = {
  color: "magenta",
  fontSize: "20px",
  border: "1px solid black",
};

ReactDOM.render(
  <div>
    <h2 style={{ color: "red" }}>Inline Style</h2>
    <h2 style={customStyle}>Use object to style</h2>
  </div>,
  document.getElementById("root")
);
