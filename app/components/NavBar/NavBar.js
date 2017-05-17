import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from  './NavBar.css'


export const NavBar = (props) => {
  let determineNav = () => {return props.name.name ?
    <div>
      <NavLink className="nav-link" activeClassName='selected' to={'/'}> Home </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/favorites'}> Favorites </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/'}> Logout </NavLink>
    </div> :
    <div>
      <NavLink className="nav-link" activeClassName='selected' to={'/'}> Home </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/signup'}> Signup </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/login'}> Login </NavLink>
    </div>
  }
  return (
    <div>
      {determineNav()}
    </div>
  )
}
