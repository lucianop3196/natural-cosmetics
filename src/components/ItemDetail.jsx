import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "../styles/ItemDetail.css";
import { useCartContext } from "../context/CartContext";

function ItemDetail({ props }) {
  const [quantity, setQuantity] = useState(1);
  const [purchaseQ, setPurchaseQ] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (count) => {
    setQuantity(count);
    setPurchaseQ(true);
    addToCart({ props, quantity: count });
  };

  return (
    <div className="itemDetail">
      <img
        className="itemDetail_img"
        src={props.pictureURL}
        alt={`Imagen del producto: ${props.name}`}
      />
      <p className="itemDetail_name">{props.name}</p>
      <p className="itemDetail_category">{props.category}</p>
      <p className="itemDetail_price">${props.price}</p>
      <p className="itemDetail_detail">{props.detail}</p>
      <div className="itemDetail_count">
        {purchaseQ ? (
          <Link to={"/cart"}>
            <button className="btnToCart">Continuar la compra</button>
          </Link>
        ) : (
          <ItemCount stock={props.stock} onAdd={onAdd} initial={quantity} />
        )}
      </div>
      <Link to={`/category/${props.category}`}>
        <button className="btnBack">Volver</button>
      </Link>
    </div>
  );
}

export default ItemDetail;
