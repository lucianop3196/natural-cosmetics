import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFetch } from "../services/getFetch";
import "../styles/ItemListContainer.css";
import { getFirestore } from "../services/getFirestore";

function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const dbConnection = getFirestore();
    const dbQuery = dbConnection.collection("items").get();

    if (idCategory) {
      dbQuery
        .then((resp) => {
          setProduct(
            resp.docs
              .map((prod) => ({ key: prod.id, ...prod.data() }))
              .filter((prod) => prod.category === idCategory)
          );
        })
        .catch((err) => console.log(err));
    } else {
      dbQuery
        .then((resp) => {
          setProduct(resp.docs.map((prod) => ({ ...prod.data() })));
        })
        .catch((err) => console.log(err));
    }
  }, [idCategory]);

  const title = () => {
    if (idCategory) {
      return `${idCategory}`;
    } else {
      return "Productos";
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
