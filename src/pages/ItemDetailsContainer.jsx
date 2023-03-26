import React from 'react'
import { products } from '../data/products'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetailsContainer = () => {

    const {id} = useParams();
    const [items] = useState(products);
    const resultado = items.find(e=>e.id === id);

  return (
    <div>
        <span>{resultado.titulo}</span>
    </div>
  )
}
