import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../data/products'
import { Link } from 'react-router-dom'

export const ItemCategoryContainer = () => {

  const { id } = useParams();
  const [items] = useState(products);
  const resultado = items.filter(e => e.categoria.id === id);

  return (
    <div>
      {
        resultado.map(e =>
          <div>
            <span>{e.titulo}</span>
            <Link to={`/item/${e.id}`}>
              Detalle Producto
            </Link>
          </div>
        )
      }
    </div>
  )
}
