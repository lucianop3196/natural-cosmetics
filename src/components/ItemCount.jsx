import React, { useState } from "react";
import "../styles/ItemCount.css";

function ItemCount({ props }) {
  const [count, setCount] = useState(props.initial);
  return (
    <div className="itemCount">
      <button onClick={() => setCount(count - 1)} className="counter">
        <i className="fas fa-minus"></i>
      </button>
      <span className="counter">{count}</span>
      <button onClick={() => setCount(count + 1)} className="counter">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default ItemCount;
