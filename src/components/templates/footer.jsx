import React, { Fragment } from "react";

import atras from "../../icons/atras.svg";
import adelante from "../../icons/adelante.svg";
import parlante from "../../icons/parlante.svg";

const Footer = ({
  musica,
  caricatura,
  nombreCancion,
  nomArtista,
  inicioImg,
  listo,
  autoPlay,
  play,
  goMusic,
}) => {
  const inicio = document.querySelector(".inicio");
  const volumen = document.getElementById("parlante");

  const subirVolumen = () => {
    inicio.volume = volumen.value / 100;
  };

  return (
    <Fragment>
      <div className="footer fixed-bottom">
        <div className="artista" onClick={goMusic}>
          <div className="caratula">
            <img src={caricatura} alt="" />
          </div>
          <div className="informe">
            <div className="marquee">
              <p className="cancion">{nombreCancion}</p>
            </div>
            <p className="album">{nomArtista}</p>
          </div>
        </div>
        <div className="controles">
          <img src={atras} alt="" />

          <img onClick={listo} src={play} alt="" />
          <img src={adelante} alt="" />
        </div>
        <div className="audio">
          <audio
            className={`inicio ${inicioImg}`}
            src={musica}
            autoPlay={autoPlay}
          ></audio>
          <input
            className={parlante}
            type="range"
            min="0"
            max="100"
            id="parlante"
            onMouseMove={subirVolumen}
          />
          <img src={parlante} alt="" />
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
