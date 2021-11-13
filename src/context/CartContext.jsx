import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

//SOLUCIONAR PROBLEMA CON EL IF DENTRO DEL ADDTOCART
const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  function addToCart(items, purchaseQ) {
    // if (cartList.some(items => items.props.id === cartList.props.id )) {
    //   alert("ya fue agregado al carrito");
    // } else {
      setCartList([...cartList, items]);
      console.log(cartList);
      // console.log(purchaseQ);

    // }
  }
  function deleteFromCart(id) {
    const itemIndex = cartList.findIndex((item) => item.props.id === id);
    cartList.splice(itemIndex, 1);
    setCartList(cartList);
    console.log(cartList);
  }
  function clearItems() {
    cartList.splice(0);
    setCartList(cartList);
    console.log(cartList);
  }
  return (
    <CartContext.Provider
      value={{ cartList, addToCart, deleteFromCart, clearItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
