import React from "react";
import "../styles/CartWidget.css";
import { useCartContext } from "../context/CartContext";

function CartWidget() {
  const { cartList } = useCartContext();
  let totalQuantity = 0; 
  console.log(cartList);
  for (const i in cartList) {
    totalQuantity += cartList[i].quantity
  }
  return (
    <button className="cartWidget">
      <i className="fas fa-shopping-cart"></i>
      <span className="totalQuantity">{`${totalQuantity}`}</span>
    </button>
  );
}

export default CartWidget;
