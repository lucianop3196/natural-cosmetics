import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { getFetch } from "../services/getFetch";
import "../styles/ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getFetch
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => console.log(err));
  }, []);

  let propsItemCount = { initial: 1, stock: 10 };
  return (
    <div className="itemContainer">
      <h2>{greeting}</h2>
      <ItemList product={product} />
      <ItemCount props={propsItemCount} />
    </div>
  );
}

export default ItemListContainer;
