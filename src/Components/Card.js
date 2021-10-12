import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [clicked, setClicked] = useState(false);

  const checkClicked = () => {
    if (clicked) {
      props.resetGame();
      setClicked(false);
    } else {
      props.incrementScore();
      setClicked(true);
    }
  };

  return (
    <div onClick={checkClicked} className="option">
      <img src={props.image} alt={props.name}></img>
    </div>
  );
}

export default Card;
