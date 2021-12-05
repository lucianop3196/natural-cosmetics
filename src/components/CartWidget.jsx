import React from "react";
import "../styles/CartWidget.css";
import { useCartContext } from "../context/CartContext";

function CartWidget() {
  const { totalQuantity } = useCartContext();
  return (
    <button className="cartWidget">
      <i className="fas fa-shopping-cart"></i>
      <span className="totalQuantity">{`${totalQuantity}`}</span>
    </button>
  );
}

export default CartWidget;
