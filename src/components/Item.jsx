function Item({prod}) {
  return (
    <div>
      <div>{prod.name}</div>
      <div>{prod.price}</div>
      <div><img src={prod.pictureURL} alt={`Imagen del producto: ${prod.name}`} /></div>
      <button>Detalles</button>
    </div>
  );
}

export default Item;
