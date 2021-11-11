import { useCartContext } from "../context/CartContext";

function Cart() {
  const { cartList, deleteFromCart } = useCartContext();

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
    </>
  );
}

export default Cart;
