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
  const title = () => {
    if (idCategory) {
      return (`${idCategory.charAt(0).toUpperCase() + idCategory.slice(1)}`);
    } else {
      return ("Productos")
    }
  };
  return (
    <>
      <h1>{title()}</h1>
      <div className="itemContainer">
        <ItemList product={product} />
      </div>
    </>
  );
}

export default ItemListContainer;
