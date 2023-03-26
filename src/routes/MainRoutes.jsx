import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBarComponent, ItemListContainerComponent } from '../components'
import { FooterComponent } from '../components/FooterComponent/FooterComponent'
import { ItemDetailsContainer, ItemCategoryContainer, CartWidget  } from '../pages'


export const MainRoutes = () => {
  return (
    <Router>
        <NavBarComponent />

        <Routes>
            <Route exact path='/' element={<ItemListContainerComponent/>}/>
            <Route exact path='/item/:id' element={<ItemDetailsContainer/>}/>
            <Route exact path='/category/:categoryId' element={<ItemCategoryContainer/>}/>
            <Route exact path='/cart-widget' element={<CartWidget/>}/>
        </Routes>
        <FooterComponent/>
    </Router>
  )
}
