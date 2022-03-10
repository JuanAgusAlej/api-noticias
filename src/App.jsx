import React, { useEffect, useState } from "react";
import Titulo from "./Components/Titulo";

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import "./css/app.css";
import BusquedaDeNoticia from "./Components/BusquedaDeNoticia";
import ListaDeNoticia from "./Components/ListaDeNoticia";
import { noticiasApi } from "./helper/nociasApi";

function App() {
  const [busqueda, setBusqueda] = useState({
    category: null,
    country: null
  });

  

  const [datos, setdatos] = useState({
    loguin: true,
    datos: {},
  });

    // useEffect(() => {

        

    //     console.log(busqueda)
    // }, []);
//     useEffect(() => {
      
//         
        
// fgh
//       }, []);

  return (
    <>
      <Titulo />

      <div className="card box row col-md-10 offset-md-1">
              <BusquedaDeNoticia setBusqueda={setBusqueda} busqueda={busqueda}/>
        <ListaDeNoticia busqueda={busqueda} />
        
              {/* {!datos.loguin ? (
        
        ) : (
          <h1 className="d-flex justify-content-center align-items-center">
            Cargando noticia
          </h1>
        )} */}
      </div>
    </>
  );
}

export default App;
