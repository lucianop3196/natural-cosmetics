import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFetch } from "../services/getFetch";
import "../styles/ItemListContainer.css";

function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    if (idCategory) {
      getFetch
        .then((res) => {
          setProduct(res.filter((prod) => prod.category === idCategory));
        })
        .catch((err) => console.log(err));
    } else {
      getFetch
        .then((res) => {
          setProduct(res);
        })
        .catch((err) => console.log(err));
    }
  }, [idCategory]);
  return (
    <div className="itemContainer">
      <ItemList product={product} />
    </div>
  );
}

export default ItemListContainer;
