import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../services/getFetch";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const [prodDetail, setProdDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (parseInt(id)) {
      getFetch
        .then((res) => {
          setProdDetail(res.find((prod) => prod.id === id));
        })
        .catch((err) => console.log(err));
    } 
  }, [id]);
  return (
    <div>
        <ItemDetail props={prodDetail}/>
    </div>
  );
}

export default ItemDetailContainer;
