import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getFirestore } from "../services/getFirestore";

function ItemDetailContainer() {
  const [prodDetail, setProdDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const dbConnection = getFirestore();
    const dbQuery = dbConnection.collection("items").doc(id).get();
    dbQuery.then((resp) => console.log(resp));

    if (id) {
      dbQuery
        .then((resp) => {
          setProdDetail({id: resp.id, ...resp.data()});
        })
        .catch((err) => console.log(err));
    }
  }, [id]);
  return (
    <>
      <ItemDetail props={prodDetail} />
    </>
  );
}

export default ItemDetailContainer;
