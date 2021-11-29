import { useCartContext } from "../context/CartContext";
import "../styles/Cart.css";
import firebase from "firebase";
import "firebase/firestore";
import { getFirestore } from "../services/getFirestore";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const { cartList, deleteFromCart, clearItems } = useCartContext();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [orderCreated, setOrderCreated] = useState(false);

  const finalPrice = () => {
    return cartList.reduce(
      (acum, prod) => acum + prod.quantity * parseInt(prod.props.price),
      0
    );
  };

  const createOrder = (e) => {
    e.preventDefault();

    setOrderCreated(true);

    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = formData;
    order.total = finalPrice();
    order.items = cartList.map((cartItem) => {
      const id = cartItem.props.id;
      const name = cartItem.props.name;
      const price = cartItem.quantity * parseInt(cartItem.props.price);
      const quantity = cartItem.quantity;
      return { id, name, price, quantity };
    });

    const dbQuery = getFirestore();
    dbQuery
      .collection("orders")
      .add(order)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() =>
        setFormData({
          name: "",
          phone: "",
          email: "",
        })
      );
    

    const itemsToUpdate = dbQuery.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartList.map((i) => i.props.id)
    );

    const batch = dbQuery.batch();

    itemsToUpdate.get().then((collection) => {
      collection.docs.forEach((docSnapshot) => {
        batch.update(docSnapshot.ref, {
          stock:
            docSnapshot.data().stock -
            cartList.find((item) => item.props.id === docSnapshot.id).quantity,
        });
      });
      batch.commit().then((res) => {
        console.log("resultado batch:", res);
      });
    });


  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const changeOrderStatus = () =>{
    setOrderCreated(false);
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
            </button>{" "}
            {orderCreated ? (<>
              <Link to={"/"}><button onClick={changeOrderStatus}>Ver más productos</button></Link>

              <p></p>
              </>
            ) : (
              <form onSubmit={createOrder} onChange={handleChange}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="N° Celular"
                  value={formData.phone}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                />
                <div>Total: ${finalPrice()}</div>
                <button>Comprar</button>
              </form>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cart;
