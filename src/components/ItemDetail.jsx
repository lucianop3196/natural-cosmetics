import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

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
    <>
      <p>{props.name}</p>
      <p>{props.category}</p>
      <p>{props.price}</p>
      <p>{props.detail}</p>
      {purchaseQ ? (
        <Link to={"/cart"}>
          <button>Continuar la compra</button>
        </Link>
      ) : (
        <ItemCount stock={props.stock} onAdd={onAdd} initial={quantity} />
      )}
    </>
  );
}

export default ItemDetail;
