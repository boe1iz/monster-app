import React from "react";

const Card = props => {
  return (
    <div>
      <h1 key={props.monster.id}>{props.monster.name}</h1>
    </div>
  );
};

export default Card;
