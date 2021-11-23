import Item from "./Item";

function ItemList({product}) {
  return (
    product.map(prod => <Item key={prod.id} prod={prod}/>)
  );
}

export default ItemList;
