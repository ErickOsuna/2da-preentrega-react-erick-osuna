import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";


export const CardProductosComponent = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {

    const db = getFirestore();
    const itemsCollection = collection(db, "products");
    getDocs(itemsCollection)
      .then(products => {
        if (products.length === 0) {
          console.log("No products")
        }
        setItems(
          products.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        );
      }).catch(err => console.log(err)).then(() => {
        console.log(items);
      });
  }, []);



  return (
    <div className='gridCardContainer'>
      {items.map(e =>
        <div key={e.id} className='productCard'>
          <span><img src={e.imagen} alt="" className='productImage' /></span>
          <div className='productCardInfo'>
            <span className='productInfoName'>{e.titulo}</span>
            <span className='productInfoPrice'>$ {e.precio}</span>
            <Link to={`/item/${e.id}`} className='details'>Detalle Producto</Link>
          </div>
        </div>
      )}
    </div>
  )
}
