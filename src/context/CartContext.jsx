import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  function addToCart(items) {
    setCartList([...cartList, items]);
  }
  function deleteFromCart(id) {
    const itemIndex = cartList.findIndex((item) => item.props.id === id);
    cartList.splice(itemIndex, 1);
    setCartList(cartList);
    // console.log(cartList);
  }
  return (
    <CartContext.Provider
      value={{ cartList, addToCart, deleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
  
};

export default CartContextProvider;
