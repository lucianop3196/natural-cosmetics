import Item from "./Item";

function ItemList({product}) {
  return (
    product.map(prod => <Item prod={prod}/>)
  );
}

export default ItemList;
