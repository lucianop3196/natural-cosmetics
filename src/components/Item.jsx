import "../styles/Item.css"
import {Link} from "react-router-dom";

function Item({prod}) {
  return (
    <div className="item">
      <p className="prodName">{prod.name}</p>
      <p>Precio por unidad:${prod.price}</p>
      <p>Stock disponible: {prod.stock}</p>
      <img src={prod.pictureURL} alt={`Imagen del producto: ${prod.name}`} />
      <Link to={`/detail/${prod.id}`}><button className="details">Información adicional</button></Link>
    </div>
  );
}

export default Item;
