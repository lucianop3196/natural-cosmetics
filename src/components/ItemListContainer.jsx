import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "../styles/ItemListContainer.css";
import { getFirestore } from "../services/getFirestore";
import Loader from "react-loader-spinner";
import "../styles/Loader.css";

function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const { idCategory } = useParams();
  const [spinnerLoading, setSpinnerLoading] = useState(true);

  useEffect(() => {
    const dbConnection = getFirestore();
    const dbQuery = dbConnection.collection("items").get();
    setSpinnerLoading(true);
    setTimeout(() => {
      if (idCategory) {
        dbQuery
          .then((resp) => {
            setProduct(
              resp.docs
                .map((prod) => ({ id: prod.id, ...prod.data() }))
                .filter((prod) => prod.category === idCategory)
            );
          })
          .catch((err) => alert("Error:", err))
          .finally(() => {
            setSpinnerLoading(false);
          });
      } else {
        dbQuery
          .then((resp) => {
            setProduct(
              resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
            );
          })
          .catch((err) => alert("Error:", err))
          .finally(() => {
            setSpinnerLoading(false);
          });
      }
    }, 2000);
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
      {spinnerLoading ? (
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          className="loader"
          height={100}
          width={100}
          visible={spinnerLoading}
        />
      ) : (
        <div className="itemContainer">
          <ItemList product={product} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
