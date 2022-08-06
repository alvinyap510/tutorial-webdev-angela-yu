import React from "react";
import ReactDOM from "react-dom";

let image = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      This is a H1
    </h1>
    <ul>
      <li>
        <img
          className="food-img"
          src="https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg"
          alt="food1"
        />
      </li>
      <li>
        <img
          className="food-img"
          src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg"
          alt="food2"
        />
      </li>
      <li>
        <img
          className="food-img"
          src="https://media.self.com/photos/61e9dae8808d098c8ccc3b58/1:1/w_768,c_limit/15-Bean-Soup-Vegetarian.jpg"
          alt="food3"
        />
      </li>
      <li>
        <img className="food-img" src={image + "?grayscale"} alt="random" />
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);
