import ItemCount from "./ItemCount";
import "../styles/Item.css"

function Item({prod}) {
  return (
    <div className="item">
      <div>{prod.name}</div>
      <div>{prod.price}</div>
      <div><img src={prod.pictureURL} alt={`Imagen del producto: ${prod.name}`} /></div>
      <button>Detalles</button>
      <ItemCount props={prod}/>
    </div>
  );
}

export default Item;
