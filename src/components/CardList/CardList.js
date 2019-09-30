import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        // <div
        //   className="card text-center"
        //   key={item.id}
        //   style={{ width: "18rem" }}
        // >
        //   <img
        //     src={`https://robohash.org/${index}.png?set=set1&size=150x150`}
        //     alt=""
        //     className="card-img-top"
        //   />
        //   <h5 className="card-title">{item.name}</h5>
        //   <p className="card-text">{item.phone}</p>
        //   <p className="card-text">{item.website}</p>
        // </div>
        <Card monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
