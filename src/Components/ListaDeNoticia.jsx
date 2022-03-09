import React from 'react'
import Noticia from './Noticia'

function ListaDeNoticia() {
  return (
      
          <div className="my-4 container">
        <div className="row rows-cols-1 row-cols-md-3 row-cols-lg-4 g-4">          
              <Noticia />
          
        </div>
      </div>
  )
}

export default ListaDeNoticia