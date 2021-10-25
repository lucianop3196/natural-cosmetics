import React, { useState } from "react";
import "../styles/ItemCount.css";

function ItemCount({ props }) {
  const [count, setCount] = useState(props.initial);

  const addProduct = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };
  const removeProduct = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemCount">
      <button onClick={removeProduct} className="counterButton">
        <i className="fas fa-minus"></i>
      </button>
      <span className="counter">{count}</span>
      <button onClick={addProduct} className="counterButton">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default ItemCount;
