import React from "react";
import '../css/titulo.css'
import noticia from '../img/noticia.png'


function Titulo() {
  return (
    <div className="p-3 mb-2 bg-primary text-white .bg-gradient d-flex justify-content-center " id="titulo">
      <img src={noticia} className="img-fluid"></img>
    </div>
  );
}

export default Titulo;
