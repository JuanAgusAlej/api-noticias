import React from "react";
import Titulo from "./Components/Titulo";

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import "./css/app.css";
import BusquedaDeNoticia from "./Components/BusquedaDeNoticia";
import ListaDeNoticia from "./Components/ListaDeNoticia";

function App() {
  return (
      <>
      <Titulo />

    <div className="card box row col-md-10 offset-md-1">
      <BusquedaDeNoticia />
      <ListaDeNoticia />
    </div>
      </>
  );
}

export default App;
