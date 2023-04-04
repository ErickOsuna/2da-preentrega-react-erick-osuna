import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products'
import { Link } from 'react-router-dom'

export const ItemCategoryContainer = () => {

  const { categoryId } = useParams();
  const [items] = useState(products);
  const resultado = items.filter(e => e.categoria.id === categoryId);

  return (
    <div className='gridCardContainer'>
      {
        resultado.map(e =>
          <div key={e.id} className='productCard'>
          <span><img src={e.imagen} alt="" className='productImage' /></span>
          <div className='productCardInfo'>
            <span className='productInfoName'>{e.titulo}</span>
            <span className='productInfoPrice'>$ {e.precio}</span>
            <Link to={`/item/${e.id}`}  className='details'>Detalle Producto</Link>
          </div>

          
        </div>
        )
      }
    </div>
  )
}
