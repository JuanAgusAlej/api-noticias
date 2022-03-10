import React, { useEffect, useState } from "react";
import { noticiasApi } from "../helper/nociasApi";

function BusquedaDeNoticia({ setBusqueda, busqueda }) {
//    const { setBusqueda } = props;
  const buscarNoticias = {
    category: busqueda.category,
    country: busqueda.country
  };
    
  
  const buscar = {
    category: [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ],
    country: [
      "ae",
      "ar",
      "at",
      "au",
      "be",
      "bg",
      "br",
      "ca",
      "ch",
      "cn",
      "co",
      "cu",
      "cz",
      "de",
      "eg",
      "fr",
      "gb",
      "gr",
      "hk",
      "hu",
      "id",
      "ie",
      "il",
      "in",
      "it",
      "jp",
      "kr",
      "lt",
      "lv",
      "ma",
      "mx",
      "my",
      "ng",
      "nl",
      "no",
      "nz",
      "ph",
      "pl",
      "pt",
      "ro",
      "rs",
      "ru",
      "sa",
      "se",
      "sg",
      "si",
      "sk",
      "th",
      "tr",
      "tw",
      "ua",
      "us",
      "ve",
      "za",
    ],
  };

    
    const validarBusqueda = () => {
        if (buscarNoticias.category && buscarNoticias.country) {
            
            setBusqueda({
                category: buscarNoticias.category,
                country: buscarNoticias.country
            })
         
            
        }  
    }
  const handleChangeCategory = (e) => {

      buscarNoticias.category = e.target.value 
      validarBusqueda()
      
  };
  const handleChangeCountry = (e) => {
    buscarNoticias.country = e.target.value

    validarBusqueda()

    };
    

  
    
  

  return (
    <>
      <div className="border-bottom border-dark p-3">
        <div className="d-flex rows col-8 offset-2 ">
          <select
            className="form-select me-5 "
            aria-label="Default select example"
            onChange={handleChangeCategory}
          >
            <option selected disabled>
              Seleciona una categoria
            </option>
            {buscar.category.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            className="form-select ms-5"
            aria-label="Default select example"
            onChange={handleChangeCountry}
          >
            <option selected disabled>
              Seleciona el pais
            </option>

            {buscar.country.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default BusquedaDeNoticia;
