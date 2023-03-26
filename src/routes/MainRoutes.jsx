import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBarComponent, ItemListContainerComponent } from '../components'
import { ItemDetailsContainer, ItemCategoryContainer  } from '../pages'


export const MainRoutes = () => {
  return (
    <Router>
        <NavBarComponent />
        <Routes>
            <Route exact path='/' element={<ItemListContainerComponent/>}/>
            <Route exact path='/item/:id' element={<ItemDetailsContainer/>}/>
            <Route exact path='/category/:id' element={<ItemCategoryContainer/>}/>
        </Routes>
    </Router>
  )
}
