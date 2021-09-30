import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import { db } from "../../utils/mock";


function ItemListContainer(props) {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategorias } = useParams();

  useEffect(() => {
    if (idCategorias) {
      db.then((respuesta) => {
        setProducts(respuesta.filter((prod) => prod.category === idCategorias));
      })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    } else {
      db.then((resp) => {
        setProducts(resp);
      })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
  }, [idCategorias]);
  

  return (
    <div>
      <h1 className="card-title">{props.greeting}</h1>
      {loading ? <h2>Cargando pagina</h2> : <ItemList productos={productos} />}
    </div>
  );
}
export default ItemListContainer;