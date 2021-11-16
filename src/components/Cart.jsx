import { useCartContext } from "../context/CartContext";

function Cart() {
  const { cartList, deleteFromCart, clearItems } = useCartContext();
  let finalPrice = 0;
  for (let i in cartList) { 
    finalPrice += parseInt(cartList[i].props.price)*cartList[i].quantity;
  }
  return (
    <>
      {cartList.map((item) => (
        <div key={item.props.id}>
          <div>{item.props.name}</div>
          <div>${item.props.price}</div>
          <div>Cantidad: {item.quantity}</div>
          <button onClick={() => deleteFromCart(item.props.id)}>
            Eliminar producto
          </button>
        </div>
      ))}
      <button onClick={() => clearItems()}>Vaciar carrito</button>
      <div>Total: ${finalPrice} </div>
    </>
  );
}

export default Cart;
