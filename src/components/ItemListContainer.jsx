import React, { useState, useEffect } from "react";
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

  return (
    <div className="itemContainer">
      <ItemList product={product} />
    </div>
  );
}

export default ItemListContainer;
