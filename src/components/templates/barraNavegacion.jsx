import React from "react";
import foxbel from "../../img/foxbel-music.png";

const BarraNavegacion = () => {
  return (
    <aside className="z-2 sticky-top"style={{ backgroundColor: "#662323", height: "100vh"}}>
      <div className="d-flex flex-column h-100 align-items-start">
        <div className="p-4">
          <img src={foxbel} alt="" className="img-fluid" />
        </div>
        <h1 className="list-group-item bg-transparent border-0 text-white fs-6 ms-3">Mi Libreria</h1>
        <ul className="list-group list-group-flush w-100">
          <li className="list-group-item bg-transparent text-white fs-6">Recientes</li>
          <li className="list-group-item bg-transparent text-white fs-6">Artistas</li>
          <li className="list-group-item bg-transparent text-white fs-6">Albums</li>
          <li className="list-group-item bg-transparent text-white fs-6">Canciones</li>
          <li className="list-group-item bg-transparent text-white fs-6">Estaciones</li>
        </ul>
        <h1 className="list-group-item bg-transparent border-0 text-white fs-6 ms-3 mt-2">Playlist</h1>
        <ul className="list-group list-group-flush w-100">
          <li className="list-group-item bg-transparent text-white fs-6">Metal</li>
          <li className="list-group-item bg-transparent text-white fs-6">Para Bailar</li>
          <li className="list-group-item bg-transparent text-white fs-6">Rock 90s</li>
          <li className="list-group-item bg-transparent text-white fs-6">Baladas</li>
        </ul>
      </div>
    </aside>
  );
};

export default BarraNavegacion;
