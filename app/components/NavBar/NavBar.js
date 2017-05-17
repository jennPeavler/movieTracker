import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from  './NavBar.css'

export const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink className="nav-link" activeClassName='selected' to={'/'}> Home </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/favorites'}> Favorites </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/login'}> Login </NavLink>
    </div>
  )
}
