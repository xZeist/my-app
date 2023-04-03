import React from "react";

const Banner = (props) => {
  return (
    <div className="row m-0 p-5">
      <div className="col-md-3 mb-md-0 p-0">
        <img
          src={props.banner}
          alt=""
          className="w-100 h-100 border-0 rounded-0 object-fit-cover"
        />
      </div>
      <div className="col-md-9 p-0 text-left bgbanner">
       <div className="ms-5 mt-5">
        <h2 className="text-white font-weight-bold">{props.musica}</h2>
        <p className="text-white">{props.artista}</p>
        <p className="text-white me-5">
        La función exclusiva de Deezer que te permite disfrutar de música sin interrupciones, 
        creada específicamente para ti. Escucha tus canciones favoritas en cualquier momento y lugar, con Deezer.
        </p>
        <div className="button mt-5 ms-5">
          <button
            className="btn btn-danger text-white btn-outline-dark me-5 btnD"
            onClick={props.reproduce}
          >
            Reproducir
          </button>
          <button className="btn btn btn-outline-light btn-transparent btnD">
            Seguir
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
