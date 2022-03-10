import React from "react";

function Noticia({noticia}) {
  return (
      <>
          
      <div className="col">
        <div className="mx-3 card h-100 border-dark">
          <img src={noticia.urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
                      <h5 className="card-title">{noticia.title}</h5>
                      <p className="card-text">
                      {noticia.description}
                      <footer  className="blockquote-footer mt-3">{noticia.source.name}</footer>
            </p>
            <a href={noticia.url} className="btn btn-primary">
              Noticia
            </a>
          </div>
        </div>
          </div>
                
    </>
  );
}

export default Noticia;
