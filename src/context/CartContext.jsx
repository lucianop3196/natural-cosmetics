import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  function addToCart(items) {
    const itemIndex = cartList.findIndex(
      (item) => item.props.id === items.props.id
    );
    if (itemIndex > -1) {
      const oldQuantity = cartList[itemIndex].quantity;
      const newQuantity = oldQuantity + items.quantity;
      if (newQuantity < items.props.stock) {
      items.quantity = newQuantity; 
      cartList.splice(itemIndex, 1);
      setCartList([...cartList, items])
      }
      else {
        alert (`La cantidad seleccionada supera el stock disponible del producto`)
      }
    } else {
      setCartList([...cartList, items]);
    }
  }
  function deleteFromCart(id) {
    const itemIndex = cartList.findIndex((item) => item.props.id === id);
    cartList.splice(itemIndex, 1);
    setCartList([...cartList]);
  }
  function clearItems() {
    cartList.splice(0);
    setCartList([...cartList]);
  }
  // cartWidget counter
  let totalQuantity = 0; 
  for (const i in cartList) {
    totalQuantity += cartList[i].quantity
  }
  return (
    <CartContext.Provider
      value={{ cartList, addToCart, deleteFromCart, clearItems, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
