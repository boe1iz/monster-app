import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`http://robohash.org/${props.monster.id}?set=set2`}
      />
      <h2>{props.monster.name}</h2>
      <h3>{props.monster.email}</h3>
    </div>
  );
};

export default Card;
