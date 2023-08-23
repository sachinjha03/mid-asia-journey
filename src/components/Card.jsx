import React, { useState } from 'react';
import '../css/card.css'; // You can create this CSS file for styling

const Card = ({ frontImage, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onMouseEnter={handleCardFlip} onMouseLeave={handleCardFlip}>
      <div className="card-inner">
        <div className="card-front">
          <img src={frontImage} alt="Front" />
        </div>
        <div className="card-back">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
