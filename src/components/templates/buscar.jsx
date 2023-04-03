import React, { Fragment } from "react";
import buscar from "../../icons/buscar.svg";
import usuario from "../../icons/usuario.svg";
const Buscar = (props) => {
  return (
    <Fragment>
      <div className="align-items-center mt-2 busqueda p-5">
        <div className={`buscar ${props.search_input}`}>
          <input
            type="search"
            placeholder="Buscar"
            className={`valor ${props.valorBuscar}`}
            onChange={props.escribe}
            onKeyUp={props.cancion}
            autoFocus
            style={{
              backgroundImage: `url(${buscar})`,
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className={`autocom-box ${props.pintarBuscar}`}>
            {props.user}
          </div>
        </div>
        <div className="d-flex align-items-center ms-auto me-5">
          <img src={usuario} alt="Icono de usuario" className="me-2" />
          <p className="mt-3">Antonio T</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Buscar;