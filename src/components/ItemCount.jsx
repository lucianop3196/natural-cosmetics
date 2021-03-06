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
        <button onClick={removeProduct} className={count === 1 ? "counterButton counterButtonRed" : "counterButton"}>
          <i className="fas fa-minus"></i>
        </button>
        {stock>0 ?<span className="counter">{count}</span>:<span>Sin stock</span> }
        
        <button
          onClick={addProduct}
          className={count >= stock ? "counterButton counterButtonRed" : "counterButton"}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
      {stock>0 ? <button className="onAdd" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button> : ""}
      
    </>
  );
}

export default ItemCount;
