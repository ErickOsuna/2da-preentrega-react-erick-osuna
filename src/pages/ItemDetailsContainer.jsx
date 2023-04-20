import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailsContainer = () => {

  const { id } = useParams();
  const [itemData, setItemData] = React.useState({});

  React.useEffect(()=>{

    const db = getFirestore();
    const docRef = doc(db, "products", id);
    getDoc(docRef)
    .then(product => {
      if(!product.exists()){
        console.log("No existe el producto");
      }
      setItemData({id: product.id, ...product.data()})
    })
    .catch (err => console.log(err))

  }, [])

  return (
    <div className='flexCardContainer1'>
      <div key={itemData.id} className='productCard flex'>
        <span><img src={itemData.imagen} alt="" className='productImage' /></span>
        <div className='productCardInfo'>
          <span className='productInfoName'>{itemData.titulo}</span>
          <span className='productInfoPrice'>{itemData.id}</span>
          <span className='productInfoPrice'>Categoría: {itemData.categoryName}</span>
          <span className='productInfoName'>$ {itemData.precio}</span>
          <Link to={`/`} className='details'>Volver atrás</Link>
        </div>
      </div>
    </div>
  )
}
