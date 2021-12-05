import React, { useState } from "react";
import "../styles/ItemCount.css";

function ItemCount({ stock, onAdd, initial }) {
  const [count, setCount] = useState(initial);

  const addProduct = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const removeProduct = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="itemCount">
        <button onClick={removeProduct} className="counterButton">
          <i className="fas fa-minus"></i>
        </button>
        <span className="counter">{count}</span>
        <button
          onClick={addProduct}
          className={count === stock ? "counterButtonRed" : "counterButton"}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <button className="onAdd" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </>
  );
}

export default ItemCount;
