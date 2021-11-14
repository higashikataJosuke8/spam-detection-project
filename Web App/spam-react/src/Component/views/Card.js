import { React, useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../cardstyles.css";

function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const clickHandle = (e) => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
    isFlipped={isFlipped}
    flipDirection="horizontal"
    containerClassName="card-cont"
    containerStyle={cardStyle} >
      <div className="card front-BG" onClick={clickHandle}>
        <div onClick={clickHandle} className="card front">
          {props.front}
        </div>
        <p className="front-text"> More info </p>
      </div>

      <div onClick={clickHandle} className="card back">
        {props.back}
      </div>
    </ReactCardFlip>
  );
}

const cardStyle = {
  width: '100%',
  padding: '10px 20px',
}
export default Card;
