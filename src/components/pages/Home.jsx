import React, { Fragment, Suspense, lazy } from "react";
import BarraNavegacion from "../templates/barraNavegacion";
import Cargando from "../templates/Cargando";
const Catalogo = lazy(() => import("../templates/Catalogo"));

const Home = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 px-0">
            <BarraNavegacion />
          </div>
          <div className="col-md-10 px-0">
            <div className="catalogo">
              <Suspense fallback={<Cargando />}>
                <Catalogo />
              </Suspense> 
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
