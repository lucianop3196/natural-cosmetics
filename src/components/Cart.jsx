import { useCartContext } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
  const { cartList, deleteFromCart, clearItems } = useCartContext();
  let finalPrice = 0;
  for (let i in cartList) {
    finalPrice += parseInt(cartList[i].props.price) * cartList[i].quantity;
  }
  return (
    <>
      <div className="cartContainer">
        <h2>Detalle de tu compra</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Producto</div>
            <div className="col col-2">Cantidad</div>
            <div className="col col-3">Precio unitario</div>
            <div className="col col-4"></div>
          </li>

          {cartList.map((item) => (
            <li key={item.props.id} className="table-row">
              <div className="col col-1" data-label="name">
                {item.props.name}
              </div>
              <div className="col col-2" data-label="quantity">
                {item.quantity}
              </div>
              <div className="col col-3" data-label="price">
                ${item.props.price}
              </div>
              <div className="btnDelete col col-4">
                <button
                  className="btnDelete"
                  title="Eliminar item"
                  onClick={() => deleteFromCart(item.props.id)}
                >
                  <i className="fas fa-minus-circle"></i>
                </button>
              </div>
            </li>
          ))}

          <li className="table-row">
            <button
              className="btnClear"
              title="Vaciar carrito"
              onClick={() => clearItems()}
            >
              <i className="far fa-trash-alt"></i>
            </button>
            <div>Total: ${finalPrice}</div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cart;
