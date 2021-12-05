import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getFirestore } from "../services/getFirestore";
import Loader from "react-loader-spinner";
import "../styles/Loader.css";

function ItemDetailContainer() {
  const [prodDetail, setProdDetail] = useState([]);
  const { id } = useParams();
  const [spinnerLoading, setSpinnerLoading] = useState(true);

  useEffect(() => {
    const dbConnection = getFirestore();
    const dbQuery = dbConnection.collection("items").doc(id).get();
    setTimeout(() => {
      if (id) {
        dbQuery
          .then((resp) => {
            setProdDetail({ id: resp.id, ...resp.data() });
          })
          .catch((err) => alert("Error:", err))
          .finally(() => {
            setSpinnerLoading(false);
          });
      }
    }, 1500);
  }, [id]);
  return (
    <>
      {spinnerLoading ? (
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          className="loader"
          height={100}
          width={100}
          visible={spinnerLoading}
        />
      ) : (
        <ItemDetail props={prodDetail} />
      )}
    </>
  );
}

export default ItemDetailContainer;
