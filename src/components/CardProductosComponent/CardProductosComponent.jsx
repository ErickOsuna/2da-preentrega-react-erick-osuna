import React from 'react'
import { products } from '../../data/products'
import { useState } from 'react'
import { Link } from 'react-router-dom';


export const CardProductosComponent = () => {

  const [items] = useState(products);


  return (
    <div className='gridCardContainer'>
      {items.map(e =>
        <div key={e.id} className='productCard'>
          <span><img src={e.imagen} alt="" className='productImage' /></span>
          <div className='productCardInfo'>
            <span className='productInfoName'>{e.titulo}</span>
            <span className='productInfoPrice'>$ {e.precio}</span>
            <Link to={`/item/${e.id}`}  className='details'>Detalle Producto</Link>
          </div>
        </div>
      )}
    </div>
  )
}
