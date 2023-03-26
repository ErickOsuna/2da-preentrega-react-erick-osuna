import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../img/logo.png"

export const NavBarComponent = () => {
  return (
    <div>
        <Link to='/'>
            <img src={logo}/>
        </Link>
        <Link to='/category/notebooks'>Notebooks</Link>
        <Link to='/category/procesadores'>Procesadores</Link>
        <Link to='/category/mothers'>Mothers</Link>
        <Link to='/category/placas-video'>Placas de Video</Link>
        <Link to='/category/memorias-ram'>Memorias RAM</Link>
        <Link to='/category/almacenamiento'>Almacenamiento</Link>
        <Link to='/category/fuentes'>Fuentes de Poder</Link>
        <Link to='/category/gabinetes'>Gabinetes</Link>
        <Link to='/category/monitores'>Monitores</Link>
    </div>
  )
}