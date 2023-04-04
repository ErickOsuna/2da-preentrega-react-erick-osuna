import React from 'react'
import { products } from '../data/products'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const ItemDetailsContainer = () => {

  const { id } = useParams();
  const [items] = useState(products);
  const resultado = items.find(e => e.id === id);


  return (
    <div className='flexCardContainer1'>
      <div key={resultado.id} className='productCard flex'>
        <span><img src={resultado.imagen} alt="" className='productImage' /></span>
        <div className='productCardInfo'>
          <span className='productInfoName'>{resultado.titulo}</span>
          <span className='productInfoPrice'>{resultado.id}</span>
          <span className='productInfoPrice'>Categoría: {resultado.categoria.nombre}</span>
          <span className='productInfoName'>$ {resultado.precio}</span>
          <Link to={`/`} className='details'>Volver atrás</Link>
        </div>
      </div>
    </div>
  )
}
