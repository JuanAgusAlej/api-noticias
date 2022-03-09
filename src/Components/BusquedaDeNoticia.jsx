import React from "react";

function BusquedaDeNoticia() {
  return (
    <>
      <div className="border-bottom border-dark p-3">
        <div className="d-flex rows col-8 offset-2 ">
          <select
            className="form-select me-5 "
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            className="form-select ms-5"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default BusquedaDeNoticia;
