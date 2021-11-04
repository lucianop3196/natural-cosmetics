function ItemDetail({ props }) {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.category}</p>
      <p>{props.price}</p>
      <p>{props.detail}</p>
    </>
  );
}

export default ItemDetail;
