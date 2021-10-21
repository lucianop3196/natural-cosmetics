import React from "react";
import ItemCount from "./ItemCount";
import "../styles/ItemListContainer.css";

function ItemListContainer({ greeting }) {
  let propsItemCount= {initial: 1}
  return (
    <div className="itemContainer">
      <h2>{greeting}</h2>
      <ItemCount props={propsItemCount}/>
    </div>
  );
}

export default ItemListContainer;
