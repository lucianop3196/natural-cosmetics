import React from "react";
import "../styles/ItemCount.css"

function ItemCount({props}) {
  return (
    <div className="itemCount">
      <button className="counter"><i className="fas fa-minus"></i></button>
      <span className="counter">{props.initial}</span>
      <button className="counter"><i className="fas fa-plus"></i></button>
    </div>
  );
}

export default ItemCount;
