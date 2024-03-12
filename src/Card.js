import React from 'react';

const Card = ({ filename }) => (
  <div className="card">
    <img src={`/${filename}`} alt={`Card ${filename}`} />
  </div>
);

export default Card;
