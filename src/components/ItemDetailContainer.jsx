import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../services/getFetch";
import ItemDetail from "../components/ItemDetail";
import { getFirestore } from "../services/getFirestore";

function ItemDetailContainer() {
  const [prodDetail, setProdDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const dbConnection = getFirestore();
    const dbQuery = dbConnection.collection("items").get();
    dbQuery.then((resp) => console.log(resp));

    if (parseInt(id)) {
      dbQuery
        .then((resp) => {
          setProdDetail(resp.docs.find((prod) => prod.id === id).data());
        })
        .catch((err) => console.log(err));
    } 
  }, [id]);
  return (
    <>
        <ItemDetail props={prodDetail}/>
    </>
  );
}

export default ItemDetailContainer;
