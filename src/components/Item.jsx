import ItemCount from "./ItemCount";
import "../styles/Item.css"
import {Link} from "react-router-dom";

function Item({prod}) {
  return (
    <div className="item">
      <div>{prod.name}</div>
      <div>{prod.price}</div>
      <img src={prod.pictureURL} alt={`Imagen del producto: ${prod.name}`} />
      <Link to={`/detail/${prod.id}`}><button>Detalles</button></Link>
      <ItemCount props={prod}/>
    </div>
  );
}

export default Item;
