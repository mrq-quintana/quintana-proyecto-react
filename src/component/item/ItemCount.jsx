import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function ItemCount({ stock, inicial, miOnClick }) {
    const [count, setCount] = useState(inicial);
    const [disponible, setDisponible] = useState(stock);
    const [botonEnd, setBotonEnd] = useState(true)

  function restar(){
    if (disponible > 1 && count >= 1) {
      setCount(count - 1);
    } else {
      setDisponible(disponible);
    }
  };

  function sumar(){
    if (count < disponible && disponible > 0) 
    setCount(count + 1);
  };

  function handlerAgregar(){
    miOnClick(count, disponible);
    setCount(0);
    setDisponible(disponible - count);
    setBotonEnd(false)
  };

  return (
    <>
        { botonEnd ?
          <div>
            <br></br>
            <button type="button" className="btn btn-secondary btn-sm" onClick={restar}>{" "}-{" "}</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={handlerAgregar}> {" "}Agregar{" "}</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={sumar}>{" "}+{" "} </button>
            <div>
              <span>Agregar a carrito: {count} </span>
            </div>
            <div>
              <span>Stock: {disponible} </span>
              
            </div>
          </div>
          :
          <div>
            
            <br></br>
            <Link to='/'>
              <button type="button" className="btn btn-secondary btn-sm">Continuar comprando</button>
            </Link>
            <Link to='/carrito'>
              <button type="button" className="btn btn-secondary btn-sm">Finalizar compra</button>
            </Link>
            <div>
              <span>Stock: {disponible} </span>
              
            </div>
          </div>

        }
    </>
  );
}
export default ItemCount;
