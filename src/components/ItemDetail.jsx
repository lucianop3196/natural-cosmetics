import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "../styles/ItemDetail.css"

function ItemDetail({ props }) {
  const [quantity, setQuantity] = useState(1);
  const [purchaseQ, setPurchaseQ] = useState(false);

  const onAdd = (count) => {
    setQuantity(count);
    setPurchaseQ(true);
    if (count > 1) {
      return alert(`Cantidad agregada al carrito: ${count} unidades`);
    } else {
      return alert(`Cantidad agregada al carrito: ${count} unidad`);
    }
  };

  return (
    <div className="itemDetail">
      <p>{props.name}</p>
      <p>{props.category}</p>
      <p>Precio: ${props.price}</p>
      <p>{props.detail}</p>
      {purchaseQ ? (
        <Link to={"/cart"}>
          <button className="btnToCart">Continuar la compra</button>
        </Link>
      ) : (
        <ItemCount stock={props.stock} onAdd={onAdd} initial={quantity} />
      )}
    </div>
  );
}

export default ItemDetail;
