import React from "react";
import ReactDOM from "react-dom";

const myName = "Alvin";

ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo placeat non
      itaque libero quae totam accusamus consequatur deleniti voluptate
      voluptatum delectus ea dolores sunt ratione, ipsam maiores temporibus
      eaque distinctio!
    </p>
    <p>
      Unde, error incidunt sequi quas fugiat cum saepe enim, labore ab id
      possimus, molestiae accusamus quidem veniam corrupti beatae harum! Dicta,
      officiis quae itaque enim optio est temporibus vitae quos?
    </p>
    <footer>
      <small>Copyright {new Date().getFullYear()}</small>
    </footer>
  </div>,
  document.getElementById("root")
);
