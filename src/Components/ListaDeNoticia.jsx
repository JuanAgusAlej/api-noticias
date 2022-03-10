import React, { useEffect, useState } from "react";
import { noticiasApi } from "../helper/nociasApi";
import Noticia from "./Noticia";

function ListaDeNoticia({ busqueda }) {
    const [noticias, setNoticias] = useState({
        loguin: true,
        datos: {}
    });

    

    useEffect(() => {
        noticiasApi(busqueda.country, busqueda.category).then((respuesta) =>
        setNoticias({
                loguin: false,
                datos: respuesta
            })
        );

    }, [busqueda]);

  //   console.log(datos);
  return (
      <>
      {busqueda.country  ? (
        <div className="my-4 container">
          <div className="row rows-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {noticias.datos.map((noticia) => (
              <Noticia noticia={noticia} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="d-flex justify-content-center align-items-center">
          Cargando noticia
        </h1>
      )}
    </>
  );
}

export default ListaDeNoticia;
