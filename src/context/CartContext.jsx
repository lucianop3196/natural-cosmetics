import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  function addToCart(items) {
    setCartList([...cartList, items]);
  }
  
  const showList = () => {
    console.log(cartList);
  };
  return (
    <CartContext.Provider value={{ cartList, showList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
