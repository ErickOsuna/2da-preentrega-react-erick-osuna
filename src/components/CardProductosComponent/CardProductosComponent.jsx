import React from 'react'
import { products } from '../../data/products'
import { useState } from 'react'
import { Link } from 'react-router-dom';


export const CardProductosComponent = () => {

const [items] = useState(products);


  return (
    <div>
        {items.map(e =>
        <div key={e.id}>
          <img src={e.imagen} alt="" />
          <span>{e.titulo}</span>
          <Link to={`/item/${e.id}`}>
            Detalle Producto
          </Link>
        </div>
        )}
    </div>
  )
}
