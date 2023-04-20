import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const ItemCategoryContainer = () => {

  const { categoryId } = useParams();
  const [productsData, setProductsData] = React.useState([]);

  React.useEffect(() => {

    const db = getFirestore();
    const itemsCollectionFiltered = query(
      collection(db, "products"),
      where("categoryId", "==", "mothers")
    )
    getDocs(itemsCollectionFiltered)
      .then(products => {
        if (products.length === 0) {
          console.log("No hay productos");
        }
        setProductsData(products.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='gridCardContainer'>
      {
        productsData.map(e =>
          <div key={e.id} className='productCard'>
            <span><img src={e.imagen} alt="" className='productImage' /></span>
            <div className='productCardInfo'>
              <span className='productInfoName'>{e.titulo}</span>
              <span className='productInfoPrice'>$ {e.precio}</span>
              <Link to={`/item/${e.id}`} className='details'>Detalle Producto</Link>
            </div>
          </div>
        )
      }
    </div>
  )
}
