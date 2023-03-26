import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../img/logo.png"
import carrito from '../../img/carrito.png'
import '../../index.css';

export const NavBarComponent = () => {
  return (
    <div className='navBar'>
      <Link to='/' className='linkNavBar'><img src={logo} className='logo' /></Link>
      <Link to='/category/notebooks' className='linkNavBar'>Notebooks</Link>
      <Link to='/category/procesadores' className='linkNavBar'>Procesadores</Link>
      <Link to='/category/mothers' className='linkNavBar'>Mothers</Link>
      <Link to='/category/placas-video' className='linkNavBar'>Placas de Video</Link>
      <Link to='/category/memorias-ram' className='linkNavBar'>Memorias RAM</Link>
      <Link to='/category/almacenamiento' className='linkNavBar'>Almacenamiento</Link>
      <Link to='/category/fuentes' className='linkNavBar'>Fuentes de Poder</Link>
      <Link to='/category/gabinetes' className='linkNavBar'>Gabinetes</Link>
      <Link to='/category/monitores' className='linkNavBar'>Monitores</Link>
      <Link to='/cart-widget' className='cartWidgetNavBar'>
        <div className='cartWidgetContainer'>
          <img src={carrito} className='cartIcon' />
          <p className='counter'>2</p>
        </div>
      </Link>
    </div>
  )
}